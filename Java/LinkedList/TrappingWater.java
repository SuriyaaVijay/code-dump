public class TrappingWater {
    public static void main(String[] args) {
        int[] ht = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println(trap(ht));
    }
    public static int trap(int[] height) {
        int l = 0 , r = height.length - 1;

        int res = 0;
        int lmax = 0 , rmax = 0 ;

        while(l < r)
        {
            if(height[l] <= height[r])
            {
                if(lmax<=height[l])
                {
                    lmax = height[l];
                }
                else
                {
                    res += lmax - height[l];
                }
                l++;
            }
            else
            {
                if(rmax<=height[r])
                {
                    rmax = height[r];
                }
                else
                {
                    res += rmax - height[r];
                }
                r--;
            }
        }
        return res;

    }
}
