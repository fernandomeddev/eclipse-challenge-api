const ShowOfferService = require('../services/ShowOffersService')


module.exports = async (request, response) => {
    try {
        const queryParams = request.query;
        
        const showOfferService = new ShowOfferService();
        const responseService = await showOfferService.handle(queryParams);

        if( responseService.responseError ) return response.status(422).json({ error: responseService.errorMessage})

        return response.status(200).json({ data: responseService });
    } catch(error) {
        return response.status(500).json({ responseError: true, message: error.message, error });
    }
}
