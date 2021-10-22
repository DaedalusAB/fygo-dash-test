export interface Merchant {
    id: string;
    name: string;
    cashback: string;
    description: string;
}

export interface MerchantsPage {
    count: number;
    next: string;
    previous: string;
    results: Merchant[];
}