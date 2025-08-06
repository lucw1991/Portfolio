My Approach:  
    - I used a three-pointer strategy starting from the backside  
        - I used a pointer for the last element of nums1, and one for nums2, as well as one for the last index of nums1
    - I then compare and insert the larger element moving backward to prevent overwriting

    - Complexity:  
        - Time = O(m + n)
        - Space = O(1) <-- In-place

    - Edge Cases considered
        - One or both arrays are empty
        - All elements in one array are either smaller or larger
        - Duplicate Values