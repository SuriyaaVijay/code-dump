class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        stable_sort(begin(arr), end(arr), [x](const auto a, const auto b){
            return abs(a - x) < abs(b - x);   // sort by distance from x
        });
        arr.resize(k);                        // choose first k elements
        sort(begin(arr), end(arr));           // sort the output in ascending order before returning
        return arr; 
    }
};
