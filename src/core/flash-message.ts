export enum FlashMessageType {
    SUCCESS = "SUCCESS",
    INFO = "INFO",
    ERROR = "ERROR",
    WARNING = "WARNING",
}

export interface FlashMessage {
    type: FlashMessageType;
    text: string;
}
