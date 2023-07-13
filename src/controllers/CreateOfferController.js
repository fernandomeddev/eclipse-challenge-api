const CreateOfferService = require('../services/CreateOfferService');

module.exports = async (request, response) => {
    try {
        const { wallet_id: walletId  } = request.params;
        const body = request.body;

        const createOfferService = new CreateOfferService();
        const responseService = await createOfferService.handle(walletId, body );

        if( responseService.responseError ) return response.status(422).json({ error: responseService.errorMessage})
        
        return response.status(201).json({ data: responseService.data });
    } catch (error) {
        return response.status(500).json({ responseError: true, message: error.message, error });
    }
}
