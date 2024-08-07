package com.perfectnumber.perfectnumber.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import com.perfectnumber.perfectnumber.enums.PerfectNumberResultStatus;
import com.perfectnumber.perfectnumber.schemas.PerfectNumbersRangeCheckResultSchema;
import java.util.HashSet;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PerfectNumbersServiceTest {
  @Autowired
  PerfectNumbersService perfectNumbersService;

  @Test
  public void checkPerfectNumberWithInvalidNumberTest(){
    Integer number = 14;
    PerfectNumberResultStatus result = perfectNumbersService.checkPerfectNumber(number).getPerfectNumberCheckResult();

    assertEquals(result, PerfectNumberResultStatus.INVALID);
  }

  @Test
  public void checkPerfectNumberWithValidNumberTest(){
    Integer number = 6;
    PerfectNumberResultStatus result = perfectNumbersService.checkPerfectNumber(number).getPerfectNumberCheckResult();

    assertEquals(result, PerfectNumberResultStatus.VALID);
  }

  @Test
  public void checkPerfectNumberWithNullTest(){
    Integer number = null;
    PerfectNumberResultStatus result = perfectNumbersService.checkPerfectNumber(number).getPerfectNumberCheckResult();

    assertEquals(result, PerfectNumberResultStatus.INVALID);
  }

  @Test
  public void checkPerfectNumberWithNegativeNumberTest(){
    Integer number = -6;
    PerfectNumberResultStatus result = perfectNumbersService.checkPerfectNumber(number).getPerfectNumberCheckResult();

    assertEquals(result, PerfectNumberResultStatus.INVALID);
  }

  @Test
  public void getPerfectNumbersWithinAValidRangeTest() {
    Integer firstNumber = 1;
    Integer secondNumber = 30;
    PerfectNumbersRangeCheckResultSchema
        result = perfectNumbersService.getPerfectNumbersWithinARange(firstNumber, secondNumber);
    HashSet<Integer> expectedPerfectNumbers = new HashSet<>();
    expectedPerfectNumbers.add(6);
    expectedPerfectNumbers.add(28);
    assertEquals(expectedPerfectNumbers, result.getPerfectNumbers());
  }

  @Test
  public void getPerfectNumbersWithinANoPerfectNumbersRangeTest() {
    Integer firstNumber = 1;
    Integer secondNumber = 5;
    PerfectNumbersRangeCheckResultSchema
        result = perfectNumbersService.getPerfectNumbersWithinARange(firstNumber, secondNumber);
    HashSet<Integer> expectedPerfectNumbers = new HashSet<>();
    assertEquals(expectedPerfectNumbers, result.getPerfectNumbers());
  }


}
