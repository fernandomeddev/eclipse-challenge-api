const cron = require('node-cron')
const DueDateJob = require('../src/jobs/DueDateJob')


async function handleDueDateValidation() {
    try {
      const dueDateJob = new DueDateJob();
      await dueDateJob.handle();
      console.log('Cron Job Executado!')
    } catch (error) {
      console.error('Erro ao Executar o Cron JOB', error);
    }
  }

module.exports = cron.schedule(' */1 * * * *', () => {
// Executa a função de alteração do dado
handleDueDateValidation();
}, {
  scheduled: false,
  timezone: 'America/Sao_Paulo'
});