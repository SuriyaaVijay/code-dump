class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        m = n
        n = abs(n)
        multi = 1.00
        if(x!=0 and n>0):
            for i  in range(0,n):
                multi = multi*x
            if(m<0):
                multi = 1.00/multi
               
        return float(multi)
