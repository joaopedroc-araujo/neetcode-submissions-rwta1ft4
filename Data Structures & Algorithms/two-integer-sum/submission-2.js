class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexesSum = [];
        for(let index = 0; index < nums.length; index += 1) {
            for (let j = index + 1; j < nums.length; j += 1) {
                if(nums[index] + nums[j] === target) {
                    console.log(nums[index] + nums[j] === target, index, j)
                    indexesSum.push(index);
                    indexesSum.push(j);
                }

            }
        }
        return indexesSum;
    }
}
