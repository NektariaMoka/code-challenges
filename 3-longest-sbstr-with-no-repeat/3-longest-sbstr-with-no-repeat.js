/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  debugger;
  let arr = s.split('')
  let tempArr = []
  let maxChar = []
  if (arr.length === 1) return 1
  for (let i = 0; i < arr.length - 1; i++) {
    maxChar = arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      if (!maxChar.includes(arr[j])) {
        maxChar = maxChar.concat(arr[j])
        tempArr.push(maxChar)
      } else {
        break
      }
    }
  }

  const substring = tempArr.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr
  }, '')
  return substring.length ? substring.length : maxChar.length
}

// console.log(lengthOfLongestSubstring("abcabcbb")); //abc ||  abc bca cab abc bc cb b
// console.log(lengthOfLongestSubstring("pwwkew")); //wke  pw w wke
// console.log(lengthOfLongestSubstring(" "));
// console.log(lengthOfLongestSubstring("au"));
// console.log(lengthOfLongestSubstring("aab"));

// ------------------------------------------------------------
// ANOTHER SOLUTION

// pwwkew =>  //wke  pw w wke
function longestSubstringWithNoRepeatMap (string) {
  let map = new Map()
  let left = 0
  let length = 0

  for (let index = 0; index < string.length; index++) {

    if (map.has(string[index])) {
      left = index + 1
    }

    map.set(string[index], index)
  }

}

function lengthOfLongestSubstringArray (s) {
  const index = new Array(128).fill(-1) // ASCII用
  let maxLength = 0,
    left = 0

  for (let right = 0; right < s.length; right++) {
    const charCode = s.charCodeAt(right)

    if (index[charCode] >= left) {
      left = index[charCode] + 1
    }

    index[charCode] = right
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

// ------------------------------------------------------------
// ANOTHER SOLUTION
var lengthOfLongestSubstringMap = function (s) {

  const map = new Map()
  let left = 0,
    ans = 0
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1)
    }
    ans = Math.max(ans, right - left + 1)
    map.set(s[right], right)
  }
  return ans
}
console.log(lengthOfLongestSubstringMap('abcdabcbb'))
// ------------------------------------------------------------
// ANTOHER SOLUTION
var lengthOfLongestSubstringSet = function (s) {
  let left = 0
  let maxLength = 0
  let charSet = new Set()

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left])
      left++
    }

    charSet.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}




