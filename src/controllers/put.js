const jobTable = require('./../models/m.bd.job');

const put = (req, res) => {
    const id = req.body.id;
    const status = req.body.status;
    jobTable.update(
        { status },
        { where: { id} } )
    .then(() => { res.json({ message: 'updated' }); })
    .catch((err) => {
        console.error(err);
        res.json({ message: 'error_updated' });
    });
}

module.exports = put;