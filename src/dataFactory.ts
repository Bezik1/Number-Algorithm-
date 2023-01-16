import { readFileSync } from "fs";
import { DataType } from "./types/index.js";

export class DataFactory {
    public createData(path: string) {
        const rawData = String(readFileSync(path))
        const data: DataType = JSON.parse(rawData)

        return data
    }
}