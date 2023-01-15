import { readFileSync } from "fs";
import { DataTypes, Paths } from "./constans/index.js";
import { DataType } from "./types/index.js";

export class DataFactory {
    createData(dataTypes: DataTypes) {
        const { dataPath, testDataPath } = Paths

        const { trainingData, testData } = DataTypes

        switch(dataTypes as DataTypes){
            case trainingData:
                return this.fetchData(dataPath)
            case testData:
                return this.fetchData(testDataPath)
            default:
                throw new Error('Incorrect data type choosen')
        }
    }

    fetchData(path: string) {
        const rawData = String(readFileSync(path))
        const data: DataType = JSON.parse(rawData)

        return data
    }
}