import express, { json } from "express"
import cors from "cors"
import http from "http"

const app = express()

app.use(cors())
app.use(express.json())

//app.use('/', routes)

const serverHttp = http.createServer(app)


export { serverHttp }

