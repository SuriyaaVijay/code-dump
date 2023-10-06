class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
       ios_base::sync_with_stdio(false);
       cin.tie(NULL);
       cout.tie(NULL);
    //    brute force approach
    //    for(int i=0;i<nums.size();i++){
    //        for(int j=i+1;j<nums.size();j++){
    //            if(target==nums[i]+nums[j]){
    //                return {i,j};
    //            }
    //        }
    //    }
    //    return {};
      // Leetcode Question
    // Below Approach is optimised code  
       unordered_map<int,int> numIndex;
       for(int i=0;i<nums.size();i++){
           int complement=target-nums[i];
           if(numIndex.find(complement)!=numIndex.end()){
               return {numIndex[complement],i};
           }
           numIndex[nums[i]]=i;
       }
       return {};
    }
};
