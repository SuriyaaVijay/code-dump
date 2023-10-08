class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
       int n  = nums.size();
       int product = 1;
       vector<int>result;
       for(int i=0;i<n;i++){
           product=product*nums[i];
        result.push_back(product);

       }
       int pproduct=1;
       for (int i=n-1;i>0;i--){
           result[i]=result[i-1]*pproduct;
           pproduct=pproduct*nums[i];
       }
       result[0]=pproduct;
  return result ;
    }
     
}; 
