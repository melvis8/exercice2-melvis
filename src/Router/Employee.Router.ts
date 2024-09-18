import { Router } from "express";
import employeeController from "../Controllers/Employee.Controller";

 export const Employee = Router()

Employee.post("/",employeeController.createEmployee)