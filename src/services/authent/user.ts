// Authenticate using our plain-object database of doom!
export interface User {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly name: string;
    readonly salt: string;
    readonly hash: Buffer;
}

// Our dummy database
export const users: Record<string, User> = {};
