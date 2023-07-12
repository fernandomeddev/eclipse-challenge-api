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
    });

const seedOwner = [
    {
        name: 'Adam Smith',
    },
    {
        name: 'Isaac Newton'
    }
];

const seedDB = async () => {
    
    const clearUpOwnerTable = await OwnerModel.find({});
    const clearUpWalletTable = await WalletModel.find({});

    if(clearUpOwnerTable || clearUpWalletTable ){
        await OwnerModel.deleteMany({});
        await WalletModel.deleteMany({});
        console.log('Foi necessário remover dados obsoletos');
    };

    await OwnerModel.insertMany(seedOwner);
    const listOfUsers = await OwnerModel.find({});

    for (let user of listOfUsers ) {

        const seedWallet = [
            {   
                owner: user.id,
                amount: 50,
            },
            {
                owner: user.id,
                amount: 30,
            },
        ]

        await WalletModel.insertMany(seedWallet);
    }
    
};

seedDB().then(() => {
    console.log('Dados Criados com sucesso!')
    mongoose.connection.close();
});