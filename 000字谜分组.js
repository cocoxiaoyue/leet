var groupAnagrams = function (strs) {
  // 1. 设置 Map 记录出现的字符串情况
  let map = new Map();
  // 2. 设置最终返回的数组
  let result = [];
  // 3. 遍历所有字符串
  for (let i = 0; i < strs.length; i++) {
    // 3.1 将其进行排序
    const sortStrs = strs[i].split("").sort().join("");
    if (map.get(sortStrs) !== undefined) {
      // 3.3 如果它存在，那么添加新元素
      result[map.get(sortStrs)].push(strs[i]);
    } else {
      // 3.2 如果它不存在，那么使用 Map 标记它，并且设置一个数组
      map.set(sortStrs, result.length);
      result.push([strs[i]]);
    }
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
