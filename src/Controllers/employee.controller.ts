import { Request, Response } from 'express'
import {v4} from 'uuid'
import { Employee } from '../Interfaces/employee.interface'
import Connection from '../Database/DbHelpers/dbhelper'

const dbhelper = new Connection



export const registerEmployee = async (req:Request, res:Response)=>{
    try {
       const id = v4()
   
       const{first_name, last_name,email, cohort}:Employee = req.body   
       
   
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





