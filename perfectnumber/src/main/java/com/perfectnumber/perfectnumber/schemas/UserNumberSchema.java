package com.perfectnumber.perfectnumber.schemas;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserNumberSchema {
  public void setUserNumber(Integer userNumber) {
    this.userNumber = userNumber;
  }

  private Integer userNumber;
}
