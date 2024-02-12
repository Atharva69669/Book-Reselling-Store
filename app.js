import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserRouter } from './routes/users.js';
import { BookRouter } from './routes/books.js';
import { WalletRouter } from './routes/wallet.js';

const app = express();
const port = 5003;

app.use(express.json());
app.use(cors());
app.use('/auth', UserRouter);
app.use('/book', BookRouter);
app.use('/wallet', WalletRouter);
app.get('/', (req, res) => res.send('Hello World!'));

mongoose.connect('mongodb+srv://atharvabilonikar:PSK2hh55qY2I9AxB@cluster0.py40l2m.mongodb.net/BookStore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to the database:', error);
});

db.once('open', () => {
  console.log('Database connected successfully');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
