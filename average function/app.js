function calculateAvg(nums) {
    if (nums.length === 0) return 0;
    let sum = nums.reduce((acc, nums) => acc + nums, 0);
    let avg = sum / nums.length;
    let result = Math.round(avg * 100) / 100;
    return result;
}
let numsArr = [19.6, 24, 87.44, 98, 20];

console.log(calculateAvg(numsArr));


