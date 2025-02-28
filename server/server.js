import express from "express"
import cors from "cors"
import  "dotenv/config"
import connectDB from "./confiqs/mongodb.js"
import { clerkWebhooks } from "./controllers/webhooks.js"


//initialize express

const app = express()

//connect to database
await connectDB()

//middlewear
app.use(cors())
//routes
app.get("/", (req,res) => res.send("api working"))
app.post("/clerk", express.json(), clerkWebhooks)
//port

const PORT = process.env.PORT || 5000

app.listen(PORT,() =>{
  console.log("server running on port " + PORT)
})