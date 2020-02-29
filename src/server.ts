import * as express from 'express'

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Hello world' })
})

const port = 3333

app.listen(port);
console.log(`App listenning on port ${port}`)