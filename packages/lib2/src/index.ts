import {hexStr} from "@monorepo/stringUtil";


export function sayHello(): string {
    return `Hello ${hexStr(10)}`;
}
