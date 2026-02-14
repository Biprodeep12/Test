export interface User {
    name: string;
    age: number;
    email?: string;
}
export declare function wrapInArray<T>(value: T): T[];
export declare function greet(name: string): string;
export declare function add(a: number, b: number): number;
export declare function describeUser(user: User): string;
export declare enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
export type StatusMessage = {
    status: Status;
    message: string;
};
export declare function getStatusMessage(status: Status): StatusMessage;
//# sourceMappingURL=utils.d.ts.map