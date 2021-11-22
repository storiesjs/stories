import { ClientType } from "./types";

export const Client = (): ClientType => {

    const createFrame = (): string => {
        const result = "I'm client";
        console.log(result);
        return result;
    };

    return {
        createFrame
    };
}