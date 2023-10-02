// Link:- https://leetcode.com/problems/container-with-most-water/
class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int i = 0;
        int j = n-1;
        int area = 0;

        while(i < j){
            int temp = (j-i)*min(height[i], height[j]);
            area = max(area, temp);

            if(height[i] == height[j])
              {
                  i++;
                  j--;
              }

            else if(height[i] < height[j])
               i++;

            else if(height[i] > height[j])
               j--;
            
        }
        return area;
   
    }
};
