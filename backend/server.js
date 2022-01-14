import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import Videos from './dbModel.js';

//app config
const app = express();
const PORT = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url =
    "mongodb+srv://kashishj:pass123@cluster0.gzf3j.mongodb.net/tiktok0?retryWrites=true&w=majority"; 
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// api endpoints
app.get('/', (req, res) => res.status(200).send("Hello world"));

app.get('/v1/posts/get', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
    })
});

app.post('/v1/posts/add', (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

// listener
app.listen(PORT, () => console.log(`Listening on localhost: ${PORT}`));