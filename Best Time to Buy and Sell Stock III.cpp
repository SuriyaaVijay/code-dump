Problem Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
Leetcode-Hard

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size()==0) return 0;
        int first_buy = INT_MIN, first_sell = 0, second_buy = INT_MIN, second_sell = 0;
        for (int i = 0; i < prices.size(); i++){
            first_buy = max(first_buy, -prices[i]);
            first_sell = max(first_sell, first_buy+prices[i]);
            second_buy = max(second_buy, first_sell-prices[i]);
            second_sell = max(second_sell, second_buy +prices[i]);
        }
      return second_sell;
    }
};
