"use strict";

let num = [9, 1, 8, 2, 7, 3, 6, 4, 5];

for (let x = 0; x < num.length; x++) {
  for (let y = 0; y < num.length; y++) {
    if (num[x] > num[y]) {
      let catcher = num[x];
      num[x] = num[y];
      num[y] = catcher;
    }
  }
}

console.log(num);
let calcMeralco = (currMeter, prevMeter, perWats) =>
  (currMeter - prevMeter) * perWats;

let waterComputeSanti = (totalBill, noOfTenants, amountPerTenant) =>
  totalBill - amountPerTenant * noOfTenants;

console.log(waterComputeSanti(2000, 5, 100));
