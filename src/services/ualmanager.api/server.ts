import express, { Express, Request, Response } from 'express';
import courseRouter from './routes/course.route';

const app: Express = express();
const port = process.env.PORT || 3005;

app.use('/api/courses', courseRouter) // All routes in here starts with /route1
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});