import bcrypt from "bcrypt";

export const hashValue = async (value) => {
  return await bcrypt.hash(value, 10);
};

export const compareHash = async (value, hash) => {
  return await bcrypt.compare(value, hash);
};
