const OwnerModel = require('../models/Owner/OwnerModel');
const WalletModel = require('../models/Wallet/WalletModel');
const OffersModel = require('../models/Offer/OffersModel');
const RemoveOfferService = require('../services/RemoveOfferService');

class DueDateJob {
    async handle() {
        
        // função que recebe duas datas e compara se uma data é 24h e 1min maior que a outra data;
        // function that receives two dates and compares whether a date is 24h and 1min greater than the other date;

        /* function isDateDifferenceGreaterThan24Hours(date1, date2) {
            const timeDifference = Math.abs(date1.getTime() - date2.getTime());
            const minutesDifference = Math.floor(timeDifference / (1000 * 60));
            const hoursDifference = Math.floor(minutesDifference / 60);
          
            return hoursDifference >= 24 && minutesDifference >= 1441;
        } */

        // função que recebe duas datas e compara se uma data é 3min maior que a outra data;
        // function that receives two dates and compares whether a date is 3min greater than the other date;

        function isCurrentDateGreaterThanOtherDate(date1, date2) {
            const timeDifference = date1.getTime() - date2.getTime();
            const minutesDifference = Math.floor(timeDifference / (1000 * 60));
          
            return minutesDifference > 3;
          }
        const listOfOffers = await OffersModel.find({});
        for (let offer of listOfOffers ) {

        // Este trecho comentado é um cron job que faria a verificação levando em consideração se a data atual for maior que 24 horas e 1 minuto em relação à data de validade:
    
            /* const currentDate = new Date();
            const offerDate = new Date(offer.createdAt);

            const isGreaterThan24Hours = isDateDifferenceGreaterThan24Hours(currentDate, offerDate);

            if (isGreaterThan24Hours) {
                console.log(offer.status)
                offer.status = 'inactive';
                offer.save();

                console.log(offer);
            } */

        // Para teste a função a baixo compara a data de criação com a data atual, caso a data de criação for 3 minutos mais antiga, a função muda o status da oferta para inactive
    
            const currentDate = new Date();
            const offerDate = new Date(offer.createdAt);

            const isGreaterThan3Minutes = isCurrentDateGreaterThanOtherDate(currentDate, offerDate);

            if (isGreaterThan3Minutes && offer.status === 'active') {
                const removeOfferService = new RemoveOfferService()
                const responseService = await removeOfferService.handle(offer.id, true);
                console.log(`Offerta: ${responseService.data.currentOffer.id} atualizada`);
            }
        }
        return '.......cron........'
    }
}

module.exports = DueDateJob;