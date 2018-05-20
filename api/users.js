"use strict";
var express = require("express");
var router = express.Router();

var users = [
    {id:1001, username:"sirpunchkill", avatar:"https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/d/d2/Shaman_Crest.png/250px-Shaman_Crest.png?version=d3bde56cc2741def8cc4dcc0bc631de8" },
    {id:1234, username:"sexemage", avatar:"https://vignette.wikia.nocookie.net/wow/images/5/55/Druid_crest.png/revision/latest?cb=20111119170709" },
    {id:2311, username:"killstien", avatar:"https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/5d/Death_Knight_Crest.png" },
    {id:1002, username:"sneakyrouge", avatar:"https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/0/02/Rogue_Crest.png/250px-Rogue_Crest.png?version=6d521f5c90bb8f053caa43708d5a5267" },
];

//get all users
router.get('/users', function (req, res, next) {
    res.json(users);
});

//get user by id
router.get('/users/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var user = getUserById(id);
    if (user) {
        res.json(user);
    }
    else {
        res.sendStatus(404);
    }
});

//find user by thier id
function getUserById(id) {
    //filter users based on id to find match
    var matches = users.filter(function (user) {
        return user.id == id;
    });
    //matches 1 = true 0 = false if true return first match else return null
    return matches.length ? matches[0] : null;
}
module.exports = router;
