export interface ICreateAddress {
    street?: string;
    number?: number;
    district?: string;
}
export interface IAddress {
    id: number;
    street: string;
    number: number;
    district: string;
    userId: number;
}
