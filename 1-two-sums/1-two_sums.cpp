#include <unordered_map>
#include <vector>
#include <iostream>
using namespace std;

int main()
{

    cout << "Hello World!" << '\n';

    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    return 0;
}

// vector<int> twoSum(const vector<int> &nums, int target)
// {
//     unordered_map<int, int> seen;

//     for (vector<int>::size_type i = 0; i < nums.size(); ++i)
//     {
//         int complement = target - nums[i];

//         cout << "complement: " << complement << '\n';

//         if (seen.contains(complement))
//         {
//             return {
//                 seen.at(complement),
//                 static_cast<int>(i)};
//         }

//         seen[nums[i]] = static_cast<int>(i);
//     }

//     return {};
// }

// int main()
// {
//     vector<int> nums = {2, 7, 11, 15};
//     int target = 9;

//     vector<int> result = twoSum(nums, target);

//     if (result.size() == 2)
//     {
//         cout << "Indices: " << result[0]
//              << ", " << result[1] << '\n';

//         cout << "Values: " << nums[result[0]]
//              << " + " << nums[result[1]]
//              << " = " << target << '\n';
//     }
//     else
//     {
//         cout << "No solution found.\n";
//     }

//     return 0;
// }
