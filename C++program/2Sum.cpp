vector<int> twoSum(vector<int>& nums, int target) 
{
        //created a map to store numbers with their indices
        unordered_map<int, int> mp;
       
        for(int i = 0; i < nums.size(); i++){
            if(mp.find(target - nums[i]) == mp.end())
                mp[nums[i]] = i;
            else
                return {mp[target - nums[i]], i};
        }
       //returning {-1,-1} if not found
        return {-1, -1};
} 
