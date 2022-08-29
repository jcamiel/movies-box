export interface Error {
    status?: number;
    code?: number | string;
    syscall?: string;
    message?: string;
}
