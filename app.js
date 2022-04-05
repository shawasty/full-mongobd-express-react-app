const express = require ('express');
const cors = require ('cors')
const logger = require ('morgan')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use(logger('dev'))

module.exports = app