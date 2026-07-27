/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumWithMap = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const next = target - nums[i]
    if (map.has(next)) {
      return [map.get(next), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

twoSumWithObject = function (nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i]
    if (obj.hasOwnProperty(value)) {
      return [obj[value], i]
    } else {
      obj[nums[i]] = i
    }
  }
}

twoSumWithMap = function (nums, target) {
  let map = new Map()

  for (let index = 0; index < nums.length; index++) {
    let divider = target - nums[index]
    if (map.has(divider)) {
      return [divider, nums[index]]
    }
    map.set(nums[index], index)
  }
}

// console.log(twoSumWithMap([2, 3, 11, 7], 9));
console.log(twoSumWithMap([2, 3, 11, 7], 13))
