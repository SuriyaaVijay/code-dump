// Java program to illustrate
// Connecting to the Database
import java.sql.*;

public class connect
{
	public static void main(String args[])
	{
		try
		{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			// Establishing Connection
			Connection con = DriverManager.getConnection(
			"jdbc:oracle:thin:@localhost:1521:orcl", "login1", "pwd1");

			if (con != null)			
				System.out.println("Connected");		
			else		
				System.out.println("Not Connected");
			
			con.close();
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
}
