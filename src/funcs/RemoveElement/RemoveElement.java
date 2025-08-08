package funcs.RemoveElement;

public class RemoveElement {

    /**
     * Removes all occurences of {@code val} from {@code nums} in-place.
     * The order of the remaining elements is not preserved in this solution.
     *
     * My Strategy:
     *  - Two pointers with a shrinking tail. When nums[i] == val, it is swapped with the last unchecked element
     *    (at end - 1) and shrinks the end. Do not advance i in that case (the swapped in value must be examined).
     *
     * @param nums   the input array (modified in-place)
     * @param val    the value to remove
     * @return k, the number of elements not equal to {@code val}
     *
     * Time:    O(n)
     * Space:   O(1)
     */
    public int removeElementSwapEnd(int[] nums, int val) {

        int end = nums.length;  // Exclusive length.
        int i = 0;

        while (i < end) {
            if (nums[i] == val) {

                // Move last unchecked element into position i.
                nums[i] = nums[end - 1];
                end--;  // Shrinks the valid region.

                // i does not increment here, we must check the new nums[i].

            } else {
                i++;
            }
        }

        return end;  // The number of kept elements.

    }


    /**
     * Removes all occurrences of {@code val} from {@code nums} in-place.
     * Order of the remaining elements is preserved in this solution.
     *
     * My strategy:
     *  - Two pointers for read and write. Copy forward only elements that do not equal val.
     *
     * @param nums   the input array (modified in-place)
     * @param val    the value to remove
     * @retrun k, the number of elements not equal to {@code val}
     *
     * Time:    O(n)
     * Space:   O(1)
     *
     */
    public int removeElementStable(int[] nums, int val) {

        int write = 0;
        for (int read = 0; read < nums.length; read++) {
            if (nums[read] != val) {
                nums[write] = nums[read];
                write++;
            }
        }

        return write;

    }

}
