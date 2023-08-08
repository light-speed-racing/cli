type Dispose = (err: Error | undefined) => void | Promise<void>

export type Disposable<T> = T & {
  dispose: Dispose
}
export const Disposable = <T>(
  t: T,
  dispose: (err: Error | undefined) => any | Promise<any>
): Disposable<T> => {
  const old = (t as any).dispose as Dispose | undefined

  return Object.assign(t, {
    dispose: async (err: Error | undefined) => {
      if (old) {
        await old?.call(t, err)
      }
      await dispose.call(t, err)
    }
  })
}
