#include <iostream>
#include <bits/stdc++.h>
using namespace std;
// BRUTFORCE
//  TC: O(N^2)
//  SC: O(1)
bool find132pattern1(vector<int> &nums)
{
    int n = nums.size();
    int leftMin = nums[0];
    for (int j = 1; j < n - 1; j++)
    {
        for (int k = j + 1; k < n; k++)
        {
            if (nums[k] > leftMin && nums[k] < nums[j])
            {
                return true;
            }
            leftMin = min(nums[j], leftMin);
        }
    }
    return false;
}

// Optimize Solution (Using Stack)

bool find132pattern2(vector<int> &nums)
{
    int n = nums.size();
    vector<int> minLeftArray(n);
    minLeftArray[0] = nums[0];

    for (int i = 1; i < n; i++)
    {
        minLeftArray[i] = min(minLeftArray[i - 1], nums[i]);
    }

    stack<int> st;
    for (int j = n - 1; j >= 0; --j)
    {
        if (nums[j] > minLeftArray[j])
        {
            while (!st.empty() && st.top() <= minLeftArray[j])
            {
                st.pop();
            }
            if (!st.empty() && st.top() < nums[j])
            {
                return true;
            }
            else
            {
                st.push(nums[j]);
            }
        }
    }
    return false;
}

int main()
{
    vector<int> v = {1, 2, 3, 4};
    vector<int> v2 = {3, 1, 4, 2};
    string ans = find132pattern1(v) ? "True" : "False";
    cout << ans << endl;
    string ansStack = find132pattern2(v2) ? "True" : "False";
    cout << ansStack << endl;
    return 0;
}