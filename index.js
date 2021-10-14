import express from "express"
import { helloworld,dataSave, getData} from "./controllers/sampleControllers.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()
// mongodb - credentials 
//automatic conversion from json data 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log(conn.connection.host)
    } catch (e) {
        console.log(e.message + process.env.MONGO_URI)
        process.exit(1)
    }
}

connectDB()
app.use(express.json())


// 200 - successfull 
// 201 - created

// 400 unauthorized user 
// 404 no found 

// 500 internal server error

app.get("/",helloworld)
app.post("/",dataSave)
app.get("/all",getData)

app.listen(5000,console.log("Port is running"))