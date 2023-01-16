import { Paths } from "./constans/index.js";
import { DataFactory } from "./dataFactory.js";
import { Predict } from "./predict.js";

const dataFactory = new DataFactory()
const data = dataFactory.createData(Paths.dataPath)
const testData = dataFactory.createData(Paths.testDataPath)

const prediction = new Predict({ data, testData })

const asyncRun = async () =>{
    await prediction.modelTraining()
    const predictionNumber = prediction.predictNumber()
    const testResult = prediction.testModel()

    console.log(predictionNumber)
    console.log(testResult)
}

asyncRun()