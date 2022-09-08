import crypto = require("crypto");
import type { User } from "./user-repository";
import { userRepository } from "./user-repository";
import * as config from "../../config";

type AuthenticateFunction = (user: User | null, error: Error | null) => void;

/**
 * Authenticates a user.
 * @param username The user's username.
 * @param password The user's password.
 * @param fn A callback function to be called if the authentication succeed or failed.
 * If the authentication succeeds, the first param of the callback is a user. If the
 * authentication fails, the second parameter may be an error.
 */
export function authenticate(
    username: string,
    password: string,
    fn: AuthenticateFunction
) {
    const user = userRepository[username];
    // Query the db for the given username
    if (!user) {
        return fn(null, null);
    }
    // Apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user.
    try {
        const hash = generateHash(password);
        if (Buffer.compare(hash, user.hash) == 0) {
            console.log(`User ${user.username} authenticated`);
            return fn(user, null);
        }
    } catch (err) {
        return fn(null, err as Error);
    }
    return fn(null, null);
}

/**
 * Creates a user and returns it.
 * @param username The user's username.
 * @param email The user's email.
 * @param name The user's name.
 * @param password The user's password.
 */
export function createUser(
    username: string,
    email: string,
    name: string,
    password: string
): User {
    const salt = "salt";
    const hash = generateHash(password);
    const user = {
        id: crypto.randomUUID(),
        username: username,
        email: email,
        name: name,
        salt: salt,
        hash: hash,
    };
    console.log(
        `\x1b[1mCreate user\x1b[0m username: \x1b[36m${username}\x1b[0m email: \x1b[36m${email}\x1b[0m`
    );
    userRepository[username] = user;
    return user;
}

function generateHash(password: string): Buffer {
    return crypto.pbkdf2Sync(password, config.APP_SALT, 2000, 64, "sha512");
}

/**
 * Finds a user by email.
 * @param email The user's email.
 *
 * Returns a user or `undefined` if no user have been found.
 */
export function findUserByEmail(email: string): User | undefined {
    return Object.values(userRepository).find((user) => user.email === email);
}

/**
 * Finds a user by username.
 * @param username The user's username.
 *
 * Returns a user or `undefined` if no user have been found.
 */
export function findUserByUsername(username: string): User | undefined {
    return Object.values(userRepository).find(
        (user) => user.username === username
    );
}

/**
 * Deletes a user by username.
 * @param username The user's username.
 */
export function deleteUser(username: string) {
    const user = findUserByUsername(username);
    if (user) {
        delete userRepository[username];
    }
}
