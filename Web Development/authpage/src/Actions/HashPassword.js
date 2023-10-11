import bcrypt from 'bcryptjs';

const HashPassword = async (password) => {
   try {
      const saltRounds = 5; // Number of salt rounds (higher is more secure but slower)
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
   } catch (error) {
      throw error;
   }
};

export default HashPassword;
