// Authenticate using our plain-object database of doom!
export interface User {
    readonly id: number;
    readonly username: string;
    readonly name: string;
    readonly salt: string;
    readonly hash: Buffer;
}

// Our dummy database
export const users: Record<string, User> = {};
