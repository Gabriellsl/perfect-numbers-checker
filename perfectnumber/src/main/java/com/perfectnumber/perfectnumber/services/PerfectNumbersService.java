package com.perfectnumber.perfectnumber.services;

import com.perfectnumber.perfectnumber.enums.PerfectNumberResultStatus;
import com.perfectnumber.perfectnumber.schemas.PerfectNumberCheckResultSchema;
import com.perfectnumber.perfectnumber.schemas.PerfectNumbersRangeCheckResultSchema;
import java.util.HashSet;
import org.springframework.stereotype.Service;

@Service
public class PerfectNumbersService {

  public static boolean isPerfect(int number) {
    if (number < 1) {
      return false;
    }

    int sum = 0;

    for (int i = 1; i <= number / 2; i++) {
      if (number % i == 0) {
        sum += i;
      }
    }

    return sum == number;
  }

  public PerfectNumberCheckResultSchema checkPerfectNumber(Integer userNumber) {
    if (userNumber == null) {
      return new PerfectNumberCheckResultSchema(PerfectNumberResultStatus.INVALID);
    }

    return new PerfectNumberCheckResultSchema(
        isPerfect(userNumber) ? PerfectNumberResultStatus.VALID : PerfectNumberResultStatus.INVALID);
  }

  public PerfectNumbersRangeCheckResultSchema getPerfectNumbersWithinARange(Integer firstNumber,
      Integer secondNumber) {
    PerfectNumbersRangeCheckResultSchema perfectNumbers =
        new PerfectNumbersRangeCheckResultSchema();
    perfectNumbers.setPerfectNumbers(new HashSet<Integer>());
    for (int i = firstNumber; i <= secondNumber; i++) {
      if (isPerfect(i)) {
        perfectNumbers.getPerfectNumbers().add(i);
      }
    }
    return perfectNumbers;
  }

}
