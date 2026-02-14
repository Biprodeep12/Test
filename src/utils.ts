// --- Interfaces ---
export interface User {
  name: string;
  age: number;
  email?: string;  // optional property
}

// --- Generic function ---
export function wrapInArray<T>(value: T): T[] {
  return [value];
}

// --- Functions with typed params & return ---
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the TypeScript server.`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function describeUser(user: User): string {
  const emailPart = user.email ? ` (${user.email})` : '';
  return `${user.name} is ${user.age} years old${emailPart}`;
}

// --- Enum ---
export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

// --- Type alias & union ---
export type StatusMessage = {
  status: Status;
  message: string;
};

export function getStatusMessage(status: Status): StatusMessage {
  return {
    status,
    message: `Current status is: ${status}`,
  };
}

// --- Quick self-test (runs when imported or executed directly) ---
if (require.main === module) {
  console.log(greet('World'));
  console.log('2 + 3 =', add(2, 3));
  console.log(describeUser({ name: 'Bob', age: 25 }));
  console.log(wrapInArray(42));
  console.log(getStatusMessage(Status.Active));
}
