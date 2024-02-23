import express, { NextFunction, Request, Response, json, request, response } from 'express'
import { Router } from 'express'
import registerRouter from './Routes/employee.router'

const app = express()

app.use(json())

app.use('/employee', registerRouter)



app.use((error:Error, request:Request, response:Response, next:NextFunction)=>{
    response.json({
        message:error.message
    })
})

let port = 4400

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})