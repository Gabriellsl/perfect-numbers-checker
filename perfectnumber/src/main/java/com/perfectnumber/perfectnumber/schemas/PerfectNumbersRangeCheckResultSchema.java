package com.perfectnumber.perfectnumber.schemas;

import java.util.Set;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PerfectNumbersRangeCheckResultSchema {
  private Set<Integer> perfectNumbers;
}
