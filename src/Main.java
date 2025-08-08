import funcs.RemoveElement.RemoveElement;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        // Instances of the remover class to be used below.
        RemoveElement remover1 = new RemoveElement();
        RemoveElement remover2 = new RemoveElement();


        // First example: Swap with end approach, order not preserved.
        int[] nums1 = {3, 2, 2, 3};
        int val1 = 3;
        int k1 = remover1.removeElementSwapEnd(nums1, val1);

        System.out.println("k1 = " + k1);
        System.out.println("First k1 elements: " + Arrays.toString(Arrays.copyOf(nums1, k1)) + "\n");


        // Second example: Stable overwrite, order is preserved in this solution.
        int[] nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
        int val2 = 2;
        int k2 = remover2.removeElementStable(nums2, val2);

        System.out.println("k2 = " + k2);
        System.out.println("First k2 elements: " + Arrays.toString(Arrays.copyOf(nums2, k2)) + "\n");

    }

}
