export function romanToInt(s: string): number {
  // number represented by 2 characters
  let nums: { [index: string]: number } = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    //
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  let i = 0;
  while (i < s.length) {
    try {
      // combine first 2 characters
      let n = s[i] + s[i + 1];
      // check if this 2-character string represents a number
      if (nums[n]) {
        sum += nums[n];
        i += 2;
      } else {
        sum += nums[s[i]];
        i += 1;
      }
    } catch (e) {
      // i should be the LAST index of the input string
      // so just add sum by single character number
      sum += nums[s[i]];
      break;
    }
  }
  return sum;
}
