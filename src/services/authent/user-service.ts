import { User, users } from "./user";
import config from "../../config";
import crypto = require("crypto");

type AuthenticateFunction = (user: User | null, error: Error | null) => void;

export function authenticate(
    username: string,
    password: string,
    fn: AuthenticateFunction
) {
    const user = users[username];
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

export function createUser(
    username: string,
    email: string,
    name: string,
    password: string
): User {
    const salt = "salt";
    const hash = generateHash(password);
    const user = {
        id: 1,
        username: username,
        email: email,
        name: name,
        salt: salt,
        hash: hash,
    };
    console.log(`Create user username: ${username} email: ${email}`);
    users[username] = user;
    return user;
}

function generateHash(password: string): Buffer {
    return crypto.pbkdf2Sync(password, config.APP_SALT, 2000, 64, "sha512");
}

export function findUserByEmail(email: string): User | undefined {
    return Object.values(users).find((user) => user.email === email);
}

export function findUserByUsername(username: string): User | undefined {
    return Object.values(users).find((user) => user.username === username);
}

export function deleteUser(username: string) {
    const user = findUserByUsername(username);
    if (user) {
        delete users[username];
    }
}
