import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { equipmentRouter } from './routes/equipment.routes'

const app = express();
app.use(json());
app.use('/equipment', equipmentRouter);

mongoose
  .connect(`mongodb://127.0.0.1:27017/lordsMobileEquipment`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

mongoose.connection.once('open', function () {
  console.log('Mongoose connected');
})

app.listen(7000, () => {
    console.log(`Server is listening on port 7000`);
})

export { app as server }