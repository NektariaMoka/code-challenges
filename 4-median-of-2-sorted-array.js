/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2]
  let smaller = 0
  for (let i = 0; i < mergedArray.length / 2 + 1; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {

      if (mergedArray[i] > mergedArray[j]) {
        smaller = mergedArray[j]
        mergedArray[j] = mergedArray[i]
        mergedArray[i] = smaller
      }
    }

  }
  console.log(mergedArray)
  let isNumberDividedbytwo = 0
  if (mergedArray.length % 2 === 0) {
    isNumberDividedbytwo = mergedArray.length / 2
    return (mergedArray[isNumberDividedbytwo - 1] + mergedArray[isNumberDividedbytwo]) / 2
  } else {
    return mergedArray[(mergedArray.length - 1) / 2]
  }

}
console.log(findMedianSortedArrays([3], [-2, -1]))

// console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]))

// console.log(findMedianSortedArrays([1, 3], [2, 4]))
// console.log(findMedianSortedArrays([1, 3], [2]))

// Another Method
var findMedianSortedArraysSorted = function (nums1, nums2) {
  //let median = 0;
  const merged = [...nums1, ...nums2]
  merged.sort((a, b) => a - b)
  if (merged.length % 2 === 0) {
    //median = (merged[~~(merged.length / 2)-1] + merged[(~~(merged.length / 2)-1) + 1]) / 2;
    return (merged[~~(merged.length / 2) - 1] + merged[(~~(merged.length / 2) - 1) + 1]) / 2
  } else {
    //median = merged[~~(merged.length / 2)];
    return merged[~~(merged.length / 2)]
  }
  //return median
}

// Another Solution
var findMedianSortedArraysWithWhile = function (nums1, nums2) {
  let A = nums1
  let B = nums2

  const total = A.length + B.length
  const half = Math.floor(total / 2)

  if (B.length < A.length) {
    [A, B] = [B, A]
  }

  let l = 0
  let r = A.length - 1

  while (true) {
    let i = Math.floor((l + r) / 2)

    let j = half - i - 2

    let Aleft = i >= 0 ? A[i] : -Infinity
    let Aright = i + 1 < A.length ? A[i + 1] : Infinity
    let Bleft = j >= 0 ? B[j] : -Infinity
    let Bright = j + 1 < B.length ? B[j + 1] : Infinity

    if (Aleft <= Bright && Bleft <= Aright) {
      if (total % 2 === 1) {
        return Math.min(Aright, Bright)
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
    } else if (Aleft > Bright) {
      r = i - 1
    } else {
      l = i + 1
    }
  }
}
