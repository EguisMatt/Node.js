import { Router } from "express";
import * as userControl  from "../Usercontroll/user.controll.js"

export const router = Router()

router.post('/user',userControl.PostUser)