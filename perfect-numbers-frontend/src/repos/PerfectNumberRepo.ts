import { CheckPerfectNumberRangeRequestSchema, CheckPerfectNumberRangeResponseSchema, CheckPerfectNumberRequestSchema, CheckPerfectNumberResponseSchema } from "../schemas/checkPerfectNumberSchema";


export const API_URL = 'http://localhost:8080';

export default class PerfectNumber {

  async checkPerfectNumber(userNumberSchema: CheckPerfectNumberRequestSchema): Promise<CheckPerfectNumberResponseSchema> {
    try {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });

      const options: RequestInit = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(userNumberSchema)
      };

      const response = await fetch(`${API_URL}/numbers`, options);
      const body = await response.json();

      if (response.status !== 200) {
        throw new Error(body.message);
      }

      return body;
    } catch {
      throw new Error();
    }
  }

  async checkPerfectNumberRange(userNumberRangeSchema: CheckPerfectNumberRangeRequestSchema): Promise<CheckPerfectNumberRangeResponseSchema> {
    try {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });

      const options: RequestInit = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(userNumberRangeSchema)
      };

      const response = await fetch(`${API_URL}/numbers/perfectNumberList`, options);
      const body = await response.json();

      if (response.status !== 200) {
        throw new Error(body.message);
      }

      return body;
    } catch {
      throw new Error();
    }
  }
 
}