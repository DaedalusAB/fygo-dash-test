export interface Transaction {
    id: string;
    amount: string;
    created: string;
    title: string;
    merchant_id: string;
}

export interface TransactionsPage {
    count: number;
    next: string;
    previous: string;
    results: Transaction[];
}