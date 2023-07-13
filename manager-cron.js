const ScheduledDueDateJob = require("./cron/ScheduledDueDateJob");

class ManagerCron {
    constructor() {
        this.jobs = [ScheduledDueDateJob]
    }

    run(){
        this.jobs.forEach(job => job.start())
    }
}

module.exports = new ManagerCron()