import java.util.Scanner;
    public class MazeLevel01Runner {
    
    public static void main(String args[]) {
    char[][] m = { { '*', '*', '*', ' ', '*', '*', '*', '*', '*' },
      { '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*' },
      { '*', ' ', '*', '*', '*', '*', '*', ' ', '*' },
      { '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*' },
      { '*', ' ', '*', '?', '*', '*', '*', ' ', '*' },
      { '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*' },
      { '*', '*', '*', ' ', '*', ' ', '*', ' ', '*' },
      { '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*' },
      { '*', '*', '*', '*', '*', '*', '*', '*', '*' } };
    
    char[][] p = { { '*', ' ', '*', '*', '*', '*' },
      { '*', ' ', '*', ' ', ' ', '*' },
      { '*', ' ', ' ', '*', ' ', '*' },
      { '*', ' ', ' ', ' ', ' ', '*' },
      { '*', ' ', ' ', '*', ' ', '*' },
      { '*', '*', 'x', '*', '*', '*' } };
    MazeLevel01 maze = new MazeLevel01(p, 4, 3);
    System.out.println("\n\n\n\n\n\n\n");
    maze.display();
    Scanner keyboard = new Scanner(System.in);
    String wait = keyboard.nextLine();
    
    if (maze.findExit())
    System.out.println("\n\n\n\n\n\n\nThere is an exit at (" + maze.getIExit() + ", " + maze.getJExit() + ")");
    else
    System.out.println("No exit was found");
    System.out.println();
    maze.display();
    
    }
    }


public class MazeLevel01 {
    private char[][] m;
    private int x, y;
    
    public MazeLevel01(char[][] a, int r, int c) {
    m = a;
    x = r;
    y = c;
    }
    
    public void display() {
    for(int i = 0; i<m.length; i++) {
    for(int j = 0; j<m[0].length; j++) {
    System.out.print(m[i][j] + " ");
    }
    System.out.println();
    }
    }
    
    public boolean findExit() {
    return findExit(x, y);
    
    }
    
    public boolean findExit(int r, int c) {
    boolean bool1 = false,  bool2 = false, bool3=false, bool4=false;
    if(r-1 != -1 && m[r-1][c] == ' ') {
    m[r-1][c] = '&';
    if(r - 1 == 0) { //base or stopping condition
    x = r - 1;
    y = c;
    return true;
    }
    bool1 = findExit(r-1, c);
    }
    
    if(r+1 != m.length && m[r+1][c] == ' ') {
    m[r+1][c] = '&';
    if(r == m.length-1) { //base or stopping condition
    x = r + 1;
    y = c;
    return true;
    }
    bool2 = findExit(r+1, c);
    }
    
    if(c-1 != -1 && m[r][c-1] == ' ') {
    m[r][c-1] = '&';
    if(c == 0) { // base or stopping condition
    x = r + 1;
    y = c;
    return true;
    }
    bool3 = findExit(r, c-1);
    }
    
    if(c+1 != m[0].length && m[r][c+1] == ' ') {
    m[r][c+1] = '&';
    if(c == m[0].length-1) { // base or stopping condition
    x = r + 1;
    y = c;
    return true;
    }
    bool4 = findExit(r, c+1);
    }
    if(bool1|| bool2||bool3||bool4) return true;
    else{
return false;
    }
    
    }
    
    public int getIExit() {
    return x;
    }
    
    public int getJExit() {
    return y;
    }
}
    
    
    
