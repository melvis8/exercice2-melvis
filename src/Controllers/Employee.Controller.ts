import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client/extension";
import { HttpCode } from "../core/constants";
import { HashPass } from "../core/constants/HashPassword";

const prisma = new PrismaClient()

const employeeController = {
createEmployee : async (req:Request, res:Response) => {
    try {
        const {email , password , name , salary , post} =  req.body
        const newPass = await HashPass(password)
        const Salary = parseInt(salary)

        const Employee = await prisma.Employee.create({
            data : {
                email ,
                password : newPass ,
                name ,
                salary : Salary,
                post
            }
        })
        res.status(HttpCode.CREATED).json(Employee)
        
    } catch (error) {
        console.log(error)
        res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg : " The employee was unable to be created sorry"})
    }
}
}

export default employeeController