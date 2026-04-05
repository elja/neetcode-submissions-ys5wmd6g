class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = -Infinity
        let r = 0
        for(let i = 0; i < nums.length; i++) {
            l = Math.max(nums[i], l)
            r += nums[i]
        }

        let lastRes = r
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            if (this.canSplit(nums, mid, k)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return l
    }

    canSplit(nums, minLargeSum, k) {
        let splits = 0
        let currSum = 0

        for(let i = 0; i < nums.length; i++) {
            if (splits > k) return false

            if (currSum + nums[i] > minLargeSum) {
                currSum = nums[i]
                splits++

                continue
            }

            currSum += nums[i]
        }

        if (currSum > 0) splits++

        return splits <= k
    }
}
