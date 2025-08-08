***Problem:***
- LeetCode problem 27. Remove Element  
  - Given an integer array nums and an integer val, remove all occurences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. 
    - Consider the number of elements in nums which are not equal to val to be k. In my solution I must:
      - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not as important as the size of nums.
      - Return k
***
***    

***My Initial Reasoning:***
- My first solution RemoveElementSwapEnd()
  - Maintain two pointers:
    - i starting from the left
    - end tracking the current valid length
  - If nums[i] == val, swap it with the last unchecked element (nums[end -1]) and decrement end.
  - Do not increment i after a swap, because the swapped-in value must still be checked. 
  - Stop when i meets end.
  - Return end as the new length k.
- I chose this as a first solution because there are fewer total writes when many removals occur and the order does not matter as defined by the problem parameters. 

***
***
***

***My second solution as I thought about the problem from a point of view where the order is needed to be preserved:***
- Second solution RemoveElementStable()
  - Maintain a write pointer for where the next kept element will be placed.
  - Iterate read from left to right
    - If nums[read] does not equal val, write it to nums[write] and increment write.
  - Return write as the new length k.
- I chose this because it is a similar solution, but it still preserves the relative order of the elements. It does have more writes if there are many removals, but it is still stable. 

***
***
***

***Both of my approaches:***
- Have a time complexity of O(n):
  - Each element is examined at most just once. SwapWithEnd may check a swapped-in element again, but the total operations remain proportional to n.
- Have a space complexity of O(1):
  - They operate entirely in-place, using only a constant number of extra variables.
  - Operating in-place means I am modifying the given array directly, without creating or using another array to store my result. All of my changes happen inside the same memory space originally allocated for nums.