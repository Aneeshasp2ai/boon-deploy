import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome To BoonAI API Services');
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});


