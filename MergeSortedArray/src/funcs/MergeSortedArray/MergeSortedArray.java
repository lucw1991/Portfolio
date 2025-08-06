package funcs.MergeSortedArray;

public class MergeSortedArray {

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;  // Pointer for the end of nums1's elements
        int p2 = n - 1;  // Pointer for the end of nums2
        int p = m + n - 1;  // Pointer for placement in nums1

        // Compare from the back and fill nums1
        while (p1 >=0 && p2>= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // If any elements remain in nums2, copy them
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }

    }

}
