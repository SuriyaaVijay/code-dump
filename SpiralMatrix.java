class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {

        int m = matrix.length;
        int n = matrix[0].length;

        ArrayList<Integer> list = new ArrayList<>();

        int left = 0;
        int top = 0;
        int right = n - 1;
        int bottom = m - 1;



            while(left <= right && top <= bottom){

            
        
        // right

        for(int i=left; i<=right; i++){
            list.add(matrix[top][i]);
        }

        top++;
        // bottom

        for(int i = top; i<=bottom; i++){
            list.add(matrix[i][right]);
        }

        right--;

        // left

        if(top <= bottom){ // if there is one row


        for(int i = right; i>= left; i--){
            list.add(matrix[bottom][i]);
        }

        bottom--;
        }


        if(left <= right){

        
        // up

        for(int i = bottom; i>=top; i--){
            list.add(matrix[i][left]);
        }
        left++;

            }
     }
        return list;

    }
}
