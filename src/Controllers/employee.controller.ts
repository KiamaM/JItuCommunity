import { Request, Response } from 'express'
import {v4} from 'uuid'
import { Employee } from '../Interfaces/employee.interface'
import Connection from '../Database/DbHelpers/dbhelper'
import bcrypt from 'bcrypt'

const dbhelper = new Connection



export const registerEmployee = async (req:Request, res:Response)=>{
    try {
       const id = v4()
   
       const{first_name, last_name,email, cohort, password}:Employee = req.body 
       
       const hashed_pwd = await bcrypt.hash(password, 5)
       console.log("I created this", hashed_pwd);
       
   
       let result = await (dbhelper.execute('registerEmployee', {
          user_id:id ,first_name, last_name, email, cohort
       }))
   
       if(result.rowsAffected[0] > 1){
           return res.json({
               error:'Account creation failed'
           })
       }else{
           
       return res.json({
           message:'You have successfully joined the club',
       })
       }
   
    } catch (error:any) {
       return res.json({
           error:error.originalError.info.message
       })
    }
   }

   export const getOneEmployee = async(req:Request, res:Response)=>{
    try {
        const id = req.params.id

        let user = await dbhelper.execute("getOneEmployees", {user_id:id})


        return res.json({
            user
        })
    } catch (error) {
        return res.json(error)
    }
    
}





export const getEmployees = async(req:Request, res:Response)=>{
    try {

        let employees = await (dbhelper.execute('getAllEmployees'))


        return res.json({
            employees: employees
        })
    } catch (error:any) {
        return res.json({
            error:error.originalError.info.message
        })
    }
}



export const updateEmployee = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const{first_name, last_name, email, cohort, password}:Employee = req.body

        const result = await dbhelper.execute("updateEmployee", {
            user_id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            cohort: cohort 
        })

        console.log(result);
        

        return res.status(200).json({
            message: "User updated successfully"
        })


    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
}


export const deleteEmployee = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const{first_name, last_name, email, cohort, password}:Employee = req.body

        const result = await dbhelper.execute("deleteEmployee", {
            user_id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            cohort: cohort 
        })

        console.log(result);
        

        return res.status(200).json({
            message: "User deleted successfully"
        })


    } catch (error) {
        return res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
}




