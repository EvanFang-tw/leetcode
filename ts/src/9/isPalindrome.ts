export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  //
  let n = x;
  let r = 0; // reverted numbers
  //
  while (n > r) {
    r = r * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  //
  return r === n || Math.floor(r / 10) === n;
}
