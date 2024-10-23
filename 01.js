// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/
// HashMap Can Reduce o(n2) complexity
var twoSum = function(nums, target) {
    let indices =[]
    for(let i=0 ; i<nums.length-1;i++){
         for(let j = i+1 ;j <= nums.length-1;j++){
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
         }
    }
    return indices
};