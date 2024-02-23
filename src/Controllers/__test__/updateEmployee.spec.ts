import mssql from 'mssql'
import { any } from 'joi';
import { Request } from 'express';
import { updateEmployee } from '../employee.controller';




describe('update a member test cases', ()=>{
    let res:any


    //define json
    beforeEach(()=>{
        res = {
            status:jest.fn().mockReturnThis(),
            json:jest.fn().mockReturnThis()
        }
    })


    //test cases
    it('Successfully updated an employee', 

        //define our login user function
        async()=>{
            //define our expected user for logins as we should not make calls to the backend
            //The check for the user is the first one from the returned array
            //Start with the returned user

            let expectedUser = {
                user_id: "0124b821-2337-4e19-82f5-d4de5219c1e0",
                first_name: "Daniel",
                last_name: "Muriithi",
                email: "muriithikiamad1+12@gmail.com",
                cohort: 7
            }

            //Once we have the expected user, we create our request to login the user

            const req = {
                body:{
                    user_id:expectedUser.user_id,

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

            //Spy on mssql

            jest.spyOn(mssql,'connect').mockResolvedValueOnce({
                request:jest.fn().mockReturnThis(),
                input:jest.fn().mockReturnThis(),
                execute:jest.fn().mockResolvedValueOnce({
                    recordset:[expectedUser]
                })
            } as never)

            //Once we have sent the email and password, we use bcrypt 
            //To compare passwords


            //Spy on jwt on the sign method with a hard coded mock token

            //Call the function
            await updateEmployee(req as Request, res)

            //Write assertions
            expect(res.json).toHaveBeenCalledWith({
                message:"User updated successfully",
            })
        }
    )




})