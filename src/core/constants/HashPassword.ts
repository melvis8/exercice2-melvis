import bcrypt from 'bcrypt';


export  async function HashPass(password :string) : Promise<string> {
 const saltRounds = 10

 const salt =  await bcrypt.genSalt(saltRounds)
 const hashedpass= await bcrypt.hash(password, salt)
 return hashedpass

}