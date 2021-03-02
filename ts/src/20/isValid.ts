export function isValid(s: string): boolean {
  const parentheses = [];
  for (let p of s) {
    if (p === "(" || p === "[" || p === "{") {
      parentheses.push(p);
    } else {
      const last = parentheses.pop();
      switch(p) {
        case ")":
          if (last !== "(") return false;
          break;
        case "]":
          if (last !== "[") return false;
          break;
        case "}":
          if (last !== "{") return false;
          break;
      }
    }
  }
  return parentheses.length === 0;
}
