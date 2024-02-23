import { Router } from "express"
import { getOneEmployee, registerEmployee } from "../Controllers/employee.controller"

const registerRouter = Router()

registerRouter.post('/', registerEmployee)
registerRouter.get('/:id', getOneEmployee)


export default registerRouter