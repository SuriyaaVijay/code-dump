#include <iostream>
#include <bits/stdc++.h>
using namespace std;
//-------------Approach-------------
// 1. We have to observe tallest building in left side of current building and also right side of current building

// 2.Calculate greatest element to left array and also of right array for taht particular element and then find minimum of both, then substract height of building.
// #.then sum all answers and finally we get tapped water!!!

int RainWaterTaping(vector<int> &heights)
{
    int size = heights.size();
    vector<int> maxL(size);
    vector<int> maxR(size);
    maxL[0] = heights[0];
    //--------------------Tallest Left----------------------
    //   ---->
    //         3, 0, 0, 2, 0, 4
    //         | /  /  /  /  / |
    // maxL[i]  3  3  3  3  3  4
    for (int i = 1; i < size; i++)
    {
        maxL[i] = max(maxL[i - 1], heights[i]);
    }

    //--------------------Tallest Right----------------------
    //                                           <---
    //                           3, 0, 0, 2, 0, 4
    // max(maxR[i+1], heights[i]) | \  \  \  \  \ |
    // maxL[i]                   4  4  4  4  4  4
    maxR[size - 1] = heights[size - 1];
    for (int i = size - 2; i >= 0; i--)
    {
        maxR[i] = max(maxR[i + 1], heights[i]);
    }

    // Water Collected
    // Calculate minimum height between left and right tallest building.
    // The difference between minimum height between left and right tallest building and height of current building gives amount of rainwater tapped upon current building
    vector<int> water(size);
    for (int i = 0; i < size; ++i)
    {
        water[i] = min(maxL[i], maxR[i]) - heights[i];
    }

    // Now Adding all tapped water voulume to get total water tapped between given buildings
    int sum = 0;

    for (int i = 0; i < size; ++i)
    {
        sum += water[i];
    }

    return sum;
}
int main()
{
    vector<int> heights = {3, 0, 0, 2, 0, 4};

    cout << "Max Water : " << RainWaterTaping(heights) << endl;

    return 0;
}