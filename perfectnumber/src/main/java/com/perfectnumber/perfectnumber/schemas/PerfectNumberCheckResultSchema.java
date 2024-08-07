package com.perfectnumber.perfectnumber.schemas;

import com.perfectnumber.perfectnumber.enums.PerfectNumberResultStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
@RequiredArgsConstructor(onConstructor_ = @Autowired)
@AllArgsConstructor
public class PerfectNumberCheckResultSchema {
  private PerfectNumberResultStatus perfectNumberCheckResult;
}
