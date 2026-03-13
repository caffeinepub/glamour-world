import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Appointment {
    id: bigint;
    service: string;
    status: Status;
    name: string;
    email: string;
    message: string;
    phone: string;
    dateTime: string;
}
export enum Status {
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Pending = "Pending"
}
export interface backendInterface {
    createAppointment(name: string, phone: string, email: string, service: string, dateTime: string, message: string): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAppointment(id: bigint): Promise<Appointment>;
    getAppointmentsByStatus(status: Status): Promise<Array<Appointment>>;
    isAppointmentOwner(arg0: bigint): Promise<boolean>;
    updateAppointmentStatus(id: bigint, status: Status): Promise<void>;
}
