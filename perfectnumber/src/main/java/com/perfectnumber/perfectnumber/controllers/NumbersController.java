package com.perfectnumber.perfectnumber.controllers;

import com.perfectnumber.perfectnumber.schemas.PerfectNumberCheckResultSchema;
import com.perfectnumber.perfectnumber.schemas.PerfectNumbersRangeCheckResultSchema;
import com.perfectnumber.perfectnumber.schemas.UserNumberRangeSchema;
import com.perfectnumber.perfectnumber.schemas.UserNumberSchema;
import com.perfectnumber.perfectnumber.services.PerfectNumbersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/numbers")
public class NumbersController {

  @Autowired(required = true)
  PerfectNumbersService perfectNumbersService;

  @PostMapping()
  public PerfectNumberCheckResultSchema getPerfectNumbers(@RequestBody UserNumberSchema userNumber){
    PerfectNumberCheckResultSchema userNumberCheckResult = perfectNumbersService.checkPerfectNumber(userNumber.getUserNumber());
    return userNumberCheckResult;
  }

  @PostMapping(path = "/perfectNumberList")
  public PerfectNumbersRangeCheckResultSchema getPerfectNumbersWithinARange(@RequestBody
  UserNumberRangeSchema userNumber){
    PerfectNumbersRangeCheckResultSchema userNumberCheckResult = perfectNumbersService.getPerfectNumbersWithinARange(userNumber.getFirstNumber(), userNumber.getSecondNumber());
    return userNumberCheckResult;
  }
}
