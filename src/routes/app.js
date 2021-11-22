import express from "express";
import morgan from "morgan";
import routes from "./routes";
import cors from 'cors';

const app = express();

/// Settings
app.set('port', process.env.PORT || 3000);

/// Middlewares
const corsOptions={};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api', routes);

export default app;