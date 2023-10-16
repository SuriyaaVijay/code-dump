class Solution
{
    public:
    //Function to return list containing first n fibonacci numbers.
    vector<long long> printFibb(int n) 
    {
        vector<long long>a(n);
        a[0]=1;
        a[1]=1;
        if(n==1)
        {
            return a;
        }
        for(int i=2;i<n;i++)
        {
            a[i]=a[i-2]+a[i-1];
        }
        return a;
    }
};