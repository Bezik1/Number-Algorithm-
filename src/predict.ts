import { layers, Rank, Scalar, Sequential, sequential, Tensor, tensor1d, tensor2d } from "@tensorflow/tfjs";
import { DataType, TensorParameters } from "./types/index.js";

export class Predict {
    data: DataType
    testData: DataType
    model: Sequential

    constructor(config: { data: DataType, testData: DataType }) {
        this.data = config.data
        this.testData = config.testData

        this.model = this.createModel()
    }

    testModel(): Scalar {
        const { xs, ys } = this.dataTransformation(this.testData)

        return this.model.evaluate(xs, ys) as Scalar
    }

    predictNumber(): number {
        const input = tensor2d([[3, 4, 5, 6]])
        const prediction = this.model.predict(input) as Tensor<Rank>

        return Math.floor(Number(prediction.dataSync()[0]))
    }

    async modelTraining() {
        const { xs, ys } = this.dataTransformation(this.data)
        
        this.model.compile({optimizer: 'sgd', loss: 'meanSquaredError'})
        return await this.model.fit(xs, ys, {epochs: 100})
    }

    createModel(): Sequential {
        const model = sequential()
        model.add(layers.dense({units: 4, inputShape: [4], activation: 'relu'}))
        model.add(layers.dense({units: 1, activation: 'linear'}))

        return model
    }

    dataTransformation(data: DataType): TensorParameters {
        return {
            xs: tensor2d(data.data),
            ys: tensor1d(data.labels)
        }
    }
}