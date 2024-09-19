import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mockRoutes from './routes/mockRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', mockRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
