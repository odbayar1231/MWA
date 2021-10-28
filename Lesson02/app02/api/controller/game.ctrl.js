const dbConn = require('../db/dbconnection');

const allGames = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        if (count > 7) {
            count = 7;
        }
    }


    let db = dbConn.getConnection();
    let gamesCollection = db.collection("games");
    gamesCollection.find().skip(offset).limit(count).toArray(function (err, docs) {
        res.status(200).json(docs);
    });


}

module.exports = {
    getAll: allGames
}