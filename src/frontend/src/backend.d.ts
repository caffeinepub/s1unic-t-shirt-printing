import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface CustomOrderInquiry {
    designDescription: string;
    name: string;
    color: string;
    email: string;
    shirtStyle: string;
    timestamp: Time;
    quantity: bigint;
}
export type Time = bigint;
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    getAllCustomOrders(): Promise<Array<CustomOrderInquiry>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    submitCustomOrder(name: string, email: string, shirtStyle: string, color: string, quantity: bigint, designDescription: string): Promise<void>;
}
