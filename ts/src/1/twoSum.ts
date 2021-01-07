export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

export function twoSum_map(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const r = map.get(target - nums[i]);
    if (r !== undefined) {
      return [r, i];
    } else {
      map.set(nums[i], i);
    }
  }
  //
  return [];
}
