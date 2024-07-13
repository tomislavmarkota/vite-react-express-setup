import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ msg: 'data submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
