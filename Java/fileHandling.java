import java.io.InputStreamReader;
import java.io.IOException;
class fileHandling{
    public static void main(String args[]){

        try(InputStreamReader isr = new InputStreamReader(System.in)){
            System.out.print("Enter characters(Numbers):");
            int l = isr.read();
            while(isr.ready()){
                System.out.println((char)l);
                l = isr.read();
            }

        }catch (IOException e){
            System.out.println(e.getMessage());
        }

    }
}
