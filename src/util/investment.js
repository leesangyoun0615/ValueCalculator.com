export function calculatePriceBookValueRatio(Indicators) {
  const { returnOnEquity, discountRate, expectedSustainabilityPeriod } =
    Indicators;
  if (!returnOnEquity || !discountRate || !expectedSustainabilityPeriod) {
    console.log("모든 값이 필요합니다.");
    return undefined;
  }
  const priceBookValueRatio =
    Math.ceil(
      Math.pow(
        (1 + returnOnEquity / 100) / (discountRate / 100 + 1),
        expectedSustainabilityPeriod
      ) * 100
    ) / 100;
  return +priceBookValueRatio;
}

export function calculateDiscountRate(Indicators) {
  const { returnOnEquity, priceBookValueRatio, expectedSustainabilityPeriod } =
    Indicators;
  if (
    !returnOnEquity ||
    !priceBookValueRatio ||
    !expectedSustainabilityPeriod
  ) {
    console.log("모든 값이 필요합니다.");
    return;
  }
  // const discountRate = Math.ceil(
  //   (((1 + returnOnEquity / 100) /
  //     Math.pow(priceBookValueRatio, 1 / expectedSustainabilityPeriod) -
  //     1) *
  //     100) /
  //     100
  // );

  const discountRate =
    ((1 + returnOnEquity / 100) /
      Math.pow(priceBookValueRatio, 1 / expectedSustainabilityPeriod) -
      1) *
    100;

  // 소수점 두 자리까지 포맷
  const formattedDiscountRate = Number(discountRate.toFixed(2));

  return formattedDiscountRate;
}
