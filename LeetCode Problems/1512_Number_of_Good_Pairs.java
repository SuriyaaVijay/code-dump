// problem link: https://leetcode.com/problems/number-of-good-pairs/
class Solution {
    public int numIdenticalPairs(int[] nums) {
        
            HashMap<Integer,Integer> map=new HashMap<>();
            for(int i=0;i<nums.length;i++){
                int val=nums[i];
                map.put(val,map.getOrDefault(val,0)+1);
            }

            int ans=0;
            for(int val:map.keySet()){
                if(map.get(val)==1) continue;
                int v=map.get(val);
                ans+=v*(v-1)/2;
            }


            return ans;
    }
}