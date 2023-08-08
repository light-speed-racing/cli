import type { Disposable } from './disposable'

export function using<T1, T2, U> (
  disposables: [Disposable<T1>, Disposable<T2>],
  fn: (t1: T1, t2: T2) => Promise<U>
): Promise<U>
export function using<T1, T2, T3, U> (
  disposables: [Disposable<T1>, Disposable<T2>, Disposable<T3>],
  fn: (t1: T1, t2: T2, t3: T3) => Promise<U>
): Promise<U>
export function using<T1, T2, T3, T4, U> (
  disposables: [Disposable<T1>, Disposable<T2>, Disposable<T3>, Disposable<T4>],
  fn: (t1: T1, t2: T2, t3: T3, t4: T4) => Promise<U>
): Promise<U>
export function using<T, U> (
  disposable: Disposable<T>,
  fn: (t: T) => Promise<U>
): Promise<U>
export function using<U> (
  disposables: ReadonlyArray<Disposable<any>> | Disposable<any>,
  fn: (...t: any) => Promise<U>
): Promise<U> {
  if (Array.isArray(disposables)) {
    return fn(...disposables)
      .then(async res => {
        await Promise.all(disposables.map(d => d.dispose()))
        return res
      })
      .catch(async err => {
        await Promise.all(disposables.map(d => d.dispose(err)))
        return Promise.reject(err)
      })
  } else {
    return fn(disposables)
      .then(async res => {
        await disposables.dispose()
        return res
      })
      .catch(async err => {
        await disposables.dispose(err)
        return Promise.reject(err)
      })
  }
}
