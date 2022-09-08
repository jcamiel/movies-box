/**
 * A user model.
 */
export interface User {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly name: string;
    readonly salt: string;
    readonly hash: Buffer;
}

// Our dummy database
export const userRepository: Record<string, User> = {};
