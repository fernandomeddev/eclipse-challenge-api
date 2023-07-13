require('dotenv').config();
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const OffersModel = require('../src/models/Offer/OffersModel');
const OwnerModel = require('../src/models/Owner/OwnerModel');
const WalletModel = require('../src/models/Wallet/WalletModel');

const mongoose = require('mongoose');
const fs = require('fs');

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

function writeJSONToFile(jsonData, filePath) {
    const jsonString = JSON.stringify(jsonData, null, 2);
  
    fs.writeFile(filePath, jsonString, err => {
      if (err) {
        console.error('Erro ao escrever o arquivo:', err);
      } else {
        console.log('Arquivo JSON foi escrito com sucesso:', filePath);
      }
    });
}

const seedDB = async () => {
    
    const clearUpOwnerTable = await OwnerModel.find({});
    const clearUpWalletTable = await WalletModel.find({});

    if(clearUpOwnerTable || clearUpWalletTable ){
        await OwnerModel.deleteMany({});
        await WalletModel.deleteMany({});
        await OffersModel.deleteMany({});
    
        console.log('Foi necessário remover dados obsoletos');
    };

    await OwnerModel.insertMany(seedOwner);
    const listOfUsers = await OwnerModel.find({});

    for (let user of listOfUsers ) {

        const seedWallet = [
            {   
                owner: user.id,
                walletName: 'WalletA',
                amount: 50,
                createdAt: Date.now()
            },
            {
                owner: user.id,
                walletName: 'WalletB',
                amount: 30,
                createdAt: Date.now()
            },
        ]

        await WalletModel.insertMany(seedWallet);
    }
    
    // criar um obj com os dados do usuário e carteira.
};


  // Exemplo de uso da função
const jsonData = {
    name: 'John Doe',
    age: 30,
    city: 'Exampleville'
};
const filePath = 'output.json';

// writeJSONToFile(data, filePath);

seedDB().then(() => {
    
    writeJSONToFile(jsonData, filePath)
    mongoose.connection.close();
});