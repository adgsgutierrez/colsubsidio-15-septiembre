const jobTable = require('./../models/m.bd.job');

const get = (req, res) => {
    jobTable.findAll().then((data) => {
        res.json(data);
    });
}

module.exports = get;