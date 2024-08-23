"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const allowedOrigins = [
    'http://localhost:3000',
    'https://capstone-project-gules.vercel.app'
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            // Allow the request if it comes from an allowed origin
            callback(null, true);
        }
        else {
            // Deny the request if it comes from a disallowed origin
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
};
// Use the CORS middleware
app.use((0, cors_1.default)(corsOptions));
// Ensure your server handles OPTIONS requests
app.options('*', (0, cors_1.default)(corsOptions));
app.use("/api/", shortUrl_1.default);
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started successfully on port : ${port}`);
});
