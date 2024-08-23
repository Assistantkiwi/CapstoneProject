import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl"
dotenv.config();
connectDb();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
    'http://localhost:3000', 
    'https://capstone-project-gules.vercel.app/' 
  ];
  
  const corsOptions = {
    origin: (origin: string | undefined, callback: (err: any, allow?: boolean) => void) => {
      if (!origin || allowedOrigins.includes(origin)) {
        // Allow the request if it comes from an allowed origin
        callback(null, true);
      } else {
        // Deny the request if it comes from a disallowed origin
        callback(new Error('Not allowed by CORS'), false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true 
};

// Use the CORS middleware
app.use(cors(corsOptions));

// Ensure your server handles OPTIONS requests
app.options('*', cors(corsOptions)); 

app.use("/api/", shortUrl);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server started successfully on port : ${port}`);
});