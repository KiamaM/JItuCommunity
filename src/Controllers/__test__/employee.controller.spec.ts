import mssql from 'mssql'
import { registerEmployee } from '../employee.controller'
import { any } from 'joi';
import {v4} from 'uuid'



describe("Employee registration", ()=>{
    //The function has a request and a response as its arguments. 
    //We start by defining them
    let res:any

    //define json for the responses in res.json return
    beforeEach(()=>{
        res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    //test cases
    //Define the createUser function.
    //It is an asynchronous function
    it("Successfully registers a user",
        async()=>{
            //Define the request body

            const req = {
                body:{
                    first_name:"May",
                    last_name:"Dean",
                    email:"named123@mailesd.com",
                    cohort:7 
                }
            }




            //To chain the inputs when not using a db helper
            const mockedInput = jest.fn().mockReturnThis()
            //Mock the execute bit
            //We expect an object with an array of rows affected with just one user created
            const mockedExecute = jest.fn().mockResolvedValue({rowsAffected:[1]})

            const mockedDbRequest ={
                input: mockedInput,
                execute:mockedExecute
            }

            const mockedPool = {
                req:jest.fn().mockReturnValue(mockedDbRequest)
            }
            jest.spyOn(mssql,"connect").mockResolvedValue(mockedPool as never)

            //Act after arranging
            //Call the create user function
            await registerEmployee(req as any, res)

            expect(res.json).toHaveBeenCalledWith({
                message:"You have successfully joined the club"
            })
        }
    )

})

