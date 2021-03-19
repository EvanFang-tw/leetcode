package main

import "fmt"

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	//
	len := 1
	//
	for _, v := range nums {
		if v != nums[len-1] {
			nums[len] = v
			len++
		}
	}
	return len
}

func main() {
	nums := []int{1, 2, 2, 3, 3}
	n := removeDuplicates(nums)
	fmt.Println(nums)
	fmt.Println(n)
}
