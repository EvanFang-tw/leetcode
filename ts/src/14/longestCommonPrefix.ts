export function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length === 0) {
    return "";
  }
  //
  let result = "";
  let n = 0;
  let end = false;
  //
  while (!end && n < strs[0].length) {
    //
    const c = strs[0][n]; // Get nth character from first string
    for (let i = 1; i < strs.length; i++) {
      if (n >= strs[i].length || strs[i][n] !== c) {
        end = true;
        break;
      }
    }
    //
    if (!end) {
      result += c;
      ++n;
    }
  }
  return result;
}
