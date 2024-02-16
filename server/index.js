import express from 'express';
import dotenv from "dotenv";
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import { login, signup } from './controllers/auth.js';
import userRoutes from './routes/users.js';
import blogRoutes from './routes/blogs.js';
import commentRoutes from './routes/comments.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello')
})
app.post('/signup', signup);
app.post('/login', login);
app.use('/user', userRoutes)
app.use('/blog', blogRoutes)
app.use('/comment', commentRoutes)

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    app.listen(PORT, () => { console.log(`Server Port: ${PORT}`) })
}).catch((error) => { console.log(`${error} did not connect`) })

export default app;