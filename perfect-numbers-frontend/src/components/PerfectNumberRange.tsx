import { useState } from "react";
import { CheckPerfectNumberRangeRequestSchema, CheckPerfectNumberRangeResponseSchema } from "../schemas/checkPerfectNumberSchema";
import { PerfectNumberService } from "../services";

function PerfectRangeNumber(){
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined);
  const [lastNumber, setLastNumber] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<undefined | number[]>(undefined);

  const handleFindPerfectNumberBetween = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!firstNumber || !lastNumber) return;
    const perfectNumberRequestSchema : CheckPerfectNumberRangeRequestSchema = {
      firstNumber: firstNumber,
      secondNumber: lastNumber
    }
    const isPerfectNumber : CheckPerfectNumberRangeResponseSchema = 
      await PerfectNumberService.checkPerfectNumbersInARange(perfectNumberRequestSchema);
    if(!isPerfectNumber) return;
    setResult(isPerfectNumber.perfectNumbers)
  }

  const handleOnChangeFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(parseInt(e.target.value));
    setResult(undefined);
  }

  const handleOnChangeLastNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNumber(parseInt(e.target.value));
    setResult(undefined);
  }

  return ( <>
      <h4 style={{marginTop: '4rem'}}>How about search perfect number between 2 numbers?</h4>
      <div style={{ backgroundColor: "#1f1f1f", padding: "2rem", borderRadius: '5px', marginTop:'1rem' }}>
        <label>Insert the first number:
          <input id="firstNumberInput" name="firstNumberInputName" 
            type="number" placeholder="Insert the first number" 
            value={firstNumber === undefined ? 
              "---" : 
              firstNumber} 
            onChange={handleOnChangeFirstNumber}
            style={{marginLeft: '0.5rem'}}/>
        </label>
        <br/>
        <label >Insert the last number:
          <input id="lastNumberInput" name="lastNumberInputName" 
            type="number" placeholder="Insert the last number" 
            value={lastNumber === undefined ? 
              "---" : 
              lastNumber} 
            onChange={handleOnChangeLastNumber}
            style={{marginLeft: '0.5rem'}}/>
        </label>
        <form id="checkPerfectNumberForm" onSubmit={handleFindPerfectNumberBetween}
          style={{marginBottom: '0.5rem', marginTop: '0.2rem'}}>
          <button id="checkPerfectNumberButton" type="submit" >Check</button>
        </form>
        <div style={result !== undefined && result.length > 0 ? {'color': '#b2fbb2'} : {'color': '#ff8181'}}>
          {result !== undefined && (result.length > 0 ? 
            result.sort((n1,n2) => n1 - n2).map((result, index) => <span> {index !== 0 && '-'} {result}</span>) : 
            'There are no perfect numbers')}
        </div>
      </div>
    </>);
}

export default PerfectRangeNumber;