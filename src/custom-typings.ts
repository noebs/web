// custom types
export interface Service {
    title: string
    url: string
    description: string,
    iconStyle?: string
}

export type TransactionType = "BILL_INQUIRY" | "BILL_PAYMENT" | "ELEC_PAY" | "E-15" | "IPIN" | "BALANCE_INQUIRY" | "CARD_TO_CARD" | "CUSTOMS" | "TOP_UP" | "MOHE" | "MOHE_ARAB"