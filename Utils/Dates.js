const moment = require("moment/moment");
const { numberOfWindowsToBe } = require("wdio-wait-for");

class Dates {

    async getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    async getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearInYYYY() {
        const now = moment();
        return now.format('YYYY');
    }

    async getCurrentMonthAndYear() {
        const now = moment() 
        return now.format('MMMM YYYY')
    }


}
module.exports = Dates;