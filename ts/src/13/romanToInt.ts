export function romanToInt(s: string): number {
  let nums: { [index: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  //
  let result = 0;
  let last = 0;
  for (const c of s) {
    let n = nums[c];
    if ( n <= last) {
      result += n;
    } else {
      result += n - (2 * last);
    }
    last = n;
  }
  return result;
}
