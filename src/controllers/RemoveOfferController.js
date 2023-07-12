const RemoveOfferService = require('../services/RemoveOfferService');

module.exports = async (request, response) => {
    try {
        const { owner_id: ownerId  } = request.params;
        const body = request.body;

        const removeOfferService = new RemoveOfferService();
        const responseService = await removeOfferService.handle(ownerId, body );

        if( responseService.responseError ) return response.status(422).json({ error: responseService.errorMessage})
        
        return response.status(201).json({ data: responseService.data });
    } catch (error) {
        return response.status(500).json({ responseError: true, message: error.message, error });
    }
}