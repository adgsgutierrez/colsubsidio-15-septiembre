const jobTable = require('./../models/m.bd.job');

const post = (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.redirect('/?message=blank');
    }
    if (req.body.name == '' || req.body.description == '') {
        res.redirect('/?message=blank');
    }
    jobTable.create({
        name: req.body.name,
        description: req.body.description,
        status: 0
    }).then(() => {
        res.redirect('/?message=created');
    }).catch((err) => {
        console.error(err);
        res.redirect('/?message=error_created');
    });
}

module.exports = post;