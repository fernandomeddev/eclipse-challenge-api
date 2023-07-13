require('dotenv').config();
const express = require('express');
const ManagerCron = require('./manager-cron');
const app = express();
const cors = require('cors')
const consign = require('consign');

require('./database');

app.use(express.json());
app.use(cors());

consign()
    .then('./src/routes')
    .into(app)

app.get("/terms", (req, res) => {
    return res.json({
        message: "Termos de Serviço"
    });
});

app.listen(3333, () => {
    console.log('................server is Running................');
    ManagerCron.run()
});
