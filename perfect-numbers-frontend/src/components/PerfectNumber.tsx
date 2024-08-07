import { useState } from "react"
import { PerfectNumberService } from "../services";
import { CheckPerfectNumberRequestSchema, CheckPerfectNumberResponseSchema } from "../schemas/checkPerfectNumberSchema";
import { perfectNumberCheckResult } from "../types/PerfectNumber";
import PerfectRangeNumber from "./PerfectNumberRange";

function PerfectNumber(){
  const [numberToCheck, setNumberToCheck] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<'' | perfectNumberCheckResult>('');

  const handleCheckIfIsAPerfectNumber = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!numberToCheck) return;
    const perfectNumberRequestSchema : CheckPerfectNumberRequestSchema = {
      userNumber: numberToCheck
    }
    const isPerfectNumber : CheckPerfectNumberResponseSchema = 
      await PerfectNumberService.checkIsPerfectNumber(perfectNumberRequestSchema);
    if(!isPerfectNumber) return;
    setResult(isPerfectNumber.perfectNumberCheckResult)
  }

  const handleOnChangeNumberChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberToCheck(parseInt(e.target.value));
    setResult('');
  }

  return <div>
          
    <h3>Hello! Welcome to perfect numbers finder/validator</h3>

    <div style={{ backgroundColor: "#1f1f1f", padding: "2rem", borderRadius: '5px' }}>
      <label>Insert a number to check if it is a Perfect Number:
        <input id="checkPerfectNumberInput" name="checkPerfectNumberInputName" 
          type="number" placeholder="Insert a number" 
          value={numberToCheck === undefined ? 
            "---" : 
            numberToCheck} 
          onChange={handleOnChangeNumberChecker}
          style={{marginLeft: '0.5rem'}}/>
      </label>
      <form id="checkPerfectNumberForm" onSubmit={handleCheckIfIsAPerfectNumber}
        style={{marginBottom: '0.5rem', marginTop: '0.2rem'}}>
        <button id="checkPerfectNumberButton" type="submit" >Check</button>
      </form>
      <div style={result === perfectNumberCheckResult.VALID ? {'color': '#b2fbb2'} : {'color': '#ff8181'}}>
        {result !== '' && (result === perfectNumberCheckResult.VALID ? 
          'This Number is a Perfect Number' : 
          'This number is not a Perfect Number')}
      </div>
    </div>

    <PerfectRangeNumber/>
  </div>
}

export default PerfectNumber