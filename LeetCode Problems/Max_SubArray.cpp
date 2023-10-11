class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int i=0;
        int j =0;
        long long sum = 0;
        int maxsum =INT_MIN;

        while(j<nums.size()){
            sum+=nums[j];

            if(sum>maxsum){
                maxsum = sum;
            }
            if(sum<0){
                sum =0;
            }
            j++;
        }
        return maxsum;
    }  
};
