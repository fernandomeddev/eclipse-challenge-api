const ShowWalletsService = require('../services/ShowWalletsService');


module.exports = async (request, response) => {
    try {
        const showWalletService = new ShowWalletsService;
        const responseService = await showWalletService.handle();

        if( responseService.responseError ) return response.status(422).json({ error: responseService.errorMessage})

        return response.status(200).json({ data: responseService });
    } catch(error) {
        return response.status(500).json({ responseError: true, message: error.message, error });
    }
}
