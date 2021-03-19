package main

import "testing"

func Test_empty_array(t *testing.T) {
	nums := []int{}
	result := removeDuplicates(nums)
	if result != 0 {
		t.Error("length should be 0")
	}
}

func Test_case1(t *testing.T) {
	nums := []int{1, 1, 2}
	result := removeDuplicates(nums)
	if result != 2 {
		t.Error("wrong result")
	}
	if nums[0] != 1 {
		t.Error("wrong result")
	}
	if nums[1] != 2 {
		t.Error("wrong result")
	}
}

func Test_case2(t *testing.T) {
	nums := []int{1, 1, 2, 2, 3}
	result := removeDuplicates(nums)
	if result != 3 {
		t.Error("length should be 3")
	}
	if nums[0] != 1 {
		t.Error("nums[0] should be 1")
	}
	if nums[1] != 2 {
		t.Error("nums[1] should be 2")
	}
	if nums[2] != 3 {
		t.Error("nums[2] should be 3")
	}
}

func Test_case3(t *testing.T) {
	nums := []int{1, 2, 3}
	result := removeDuplicates(nums)
	if result != 3 {
		t.Error("length should be 3")
	}
	if nums[0] != 1 {
		t.Error("nums[0] should be 1")
	}
	if nums[1] != 2 {
		t.Error("nums[1] should be 2")
	}
	if nums[2] != 3 {
		t.Error("nums[2] should be 3")
	}
}
