export type Bool = 0
| 1

export type Track = 'barcelona'
| 'brands_hatch'
| 'cota'
| 'donington'
| 'hungaroring'
| 'imola'
| 'indianapolis'
| 'kyalami'
| 'laguna_seca'
| 'misano'
| 'monza'
| 'mount_panorama'
| 'nurburgring'
| 'oulton_park'
| 'paul_ricard'
| 'silverstone'
| 'snetterton'
| 'spa'
| 'suzuka'
| 'watkins_glen'
| 'zandvoort'
| 'zandvoort'

export enum DriverCategory {
    Bronze = 0,
    Silver = 1,
    Gold = 2,
    Platinum = 3,
}
export enum CupCategory {
    Overall = 0,
    ProAm = 1,
    Am = 2,
    Silver = 3,
    National = 4,
}

export type CarGroup = 'GT3' | 'GT4' | 'FreeForAll' | 'GTC'
