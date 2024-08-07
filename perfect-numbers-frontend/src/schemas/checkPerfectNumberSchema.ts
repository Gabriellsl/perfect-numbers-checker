import { perfectNumberCheckResult } from "../types/PerfectNumber"

export interface CheckPerfectNumberRequestSchema {
  userNumber: number
}

export type CheckPerfectNumberResponseSchema = {
  perfectNumberCheckResult: perfectNumberCheckResult
}

export interface CheckPerfectNumberRangeRequestSchema {
  firstNumber: number,
  secondNumber: number
}

export type CheckPerfectNumberRangeResponseSchema = {
  perfectNumbers: number[]
}