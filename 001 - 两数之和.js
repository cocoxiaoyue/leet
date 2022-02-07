nums = [3, 2, 4];
target = 6;

// var getNumIndex = function (nums, target) {
//   for (let index = 0; index < nums.length; index++) {
//     for (let j = index + 1; j < nums.length; j++) {
//       if (nums[index] + nums[j] == target) {
//         return [index, j];
//       }
//     }
//   }
// };

// console.log(getNumIndex(nums, target));

var getNumIndex = function (nums, target) {
  let result = [];
  try {
    nums.map((item, index) => {
      if (
        nums.indexOf(target - item) > -1 &&
        nums.indexOf(target - item) != index
      ) {
        result = [index, nums.indexOf(target - item)];
        // 抛出异常，结束循环
        throw "0";
      }
    });
  } catch (e) {}
  return result;
};

console.log(getNumIndex(nums, target));
