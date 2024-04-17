import express, { Express, Request, Response} from 'express'
import realisatorRoutes from './Routes/realisatorRoutes';
import filmRoutes from './Routes/filmRoutes';


const app: Express = express()

const mongoose = require('mongoose');
const uri = "mongodb+srv://azerty123:azerty@cluster0.f6reodt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    console.error(error)
  }
}
run().catch(console.dir);

app.use(express.json())
app.use('/api/realisator', realisatorRoutes)
app.use('/api/film', filmRoutes)
app.use('/api/realisator', realisatorRoutes)

const PORT = 3002

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
