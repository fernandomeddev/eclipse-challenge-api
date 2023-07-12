require('dotenv').config();
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const OwnerModel = require('../src/models/Owner/OwnerModel');
const WalletModel = require('../src/models/Wallet/WalletModel');

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@sharkdev-api.plzqojw.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => {
        console.log('connected with mongoDB')
    })
    .catch(e => {
        const msg = 'MongoDB conection Error!'

        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m' + e)
        //connection <monitor> to 54.232.44.65:27017 closed - fix it updating your IP:Adress in network section on atlas, in your cluster.
    });



const seedDB = async () => {

    const query = {
        name: "Teste Seeder"
    }
    const refUser = await OwnerModel.findOne(query);

    const seedWallet = [
        {   
            owner: refUser.id,
            amount: 50,
        },
    ];
    // await WalletModel.deleteMany({});
    await WalletModel.insertMany(seedWallet);
};

seedDB().then(() => {
    console.log('Carteira Criada com sucesso!')
    mongoose.connection.close();
});