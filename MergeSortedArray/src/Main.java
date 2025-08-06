import java.lang.reflect.Array;
import java.util.Arrays;

import funcs.MergeSortedArray.MergeSortedArray;

public class Main {

    public static void main(String[] args) {

        int[] nums1 = {1,2,3,0,0,0};
        int m = 3;

        int nums2[] = {2,5,6};
        int n = 3;

        // Create instance of Merge class
        MergeSortedArray merger = new MergeSortedArray();
        merger.merge(nums1, m, nums2, n);

        // Added spacing just for my own preferences
        System.out.printf("Hello, here is your merged array!\n" +  "     " + Arrays.toString(nums1));
    }

}