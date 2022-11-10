import express from 'express';

import cors from 'cors'

import HelloController
    from "./controllers/hello-controller.js"

import UserController
    from "./controllers/users/users-controller.js"


const app = express()

app.use(cors())

app.use(express.json());


HelloController(app)

UserController(app)

app.listen(4000)

