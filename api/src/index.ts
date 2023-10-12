import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);

app.use(compression());
app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000/');
});

const MONGO_URL =
  'mongodb://tom:welkgnoa%402018@62.72.30.101:27017/wdcoders-chat-app?authSource=admin';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/api', router());
