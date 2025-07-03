import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Prisma with Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/createpost', async (req: Request, res: Response) => {
  const { Title, Content, Author } = req.body;
  const post = await prisma.post.create({
    data: { Title, Content, Author },
  });
  res.json(post);
});

app.get('/posts', async (req: Request, res: Response) => {
  const users = await prisma.post.findMany();
  res.json(users);
});