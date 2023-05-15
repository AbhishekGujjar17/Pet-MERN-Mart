import bcrypt from "bcrypt";

export const hashPassword = async (password) => {

  try {
    const saltLength = 10;
    const hashedPassword = await bcrypt.hash(password, saltLength);
    return hashedPassword;
  }

  catch (error) {
    return error;
  }

};

export const comparePassword = async (password, hashedPassword) => {

  try {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  }
  catch (error) {
    return error;
  }
};