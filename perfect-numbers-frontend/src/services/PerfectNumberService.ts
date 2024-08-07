import { PerfectNumberRepo } from "../repos";
import { CheckPerfectNumberRangeRequestSchema, CheckPerfectNumberRangeResponseSchema, CheckPerfectNumberRequestSchema, CheckPerfectNumberResponseSchema } from "../schemas/checkPerfectNumberSchema";


export default class PerfectNumberServ {

  async checkIsPerfectNumber(userNumberSchema: CheckPerfectNumberRequestSchema): Promise<CheckPerfectNumberResponseSchema> {
    return await PerfectNumberRepo.checkPerfectNumber(userNumberSchema);
  }

  async checkPerfectNumbersInARange(userNumberRangeSchema: CheckPerfectNumberRangeRequestSchema): Promise<CheckPerfectNumberRangeResponseSchema> {
    return await PerfectNumberRepo.checkPerfectNumberRange(userNumberRangeSchema);
  }
}
