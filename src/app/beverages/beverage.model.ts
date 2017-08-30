export enum BeverageCategory {
    BEER = 0,
    WINE = 1,
    SAKE = 2,
    WHISKEY = 3
}

export class Beverage {
    id?: number;
    name?: string;
    comment?: string;
    brewery?: string;
    percentage?: number;
    country?: string;
    style?: string;
    sscore?: string;
    oscore?: string;
    category?: number;
}
