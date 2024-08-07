package com.perfectnumber.perfectnumber.schemas;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor()
public class UserNumberRangeSchema {

  private Integer firstNumber;
  private Integer secondNumber;

}
