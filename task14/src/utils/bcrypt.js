import bcryptjs from "bcryptjs"

export const hashedPassword=async(password)=>{
    const hash=await bcryptjs.hash(password,10);
    return hash
}


export const comparePassword=async(original,hashed)=>{
    const isValid=await bcryptjs.compare(original,hashed);
    return isValid;
}