import { Tensor1D, Tensor2D } from "@tensorflow/tfjs"

export type DataType = {
    data: number[][],
    labels: number[]
}

export type TensorParameters = {
    xs: Tensor2D,
    ys: Tensor1D
}