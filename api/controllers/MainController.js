/* global module, Users */

/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var MainController = {
    index: function (req, res){
        res.view();
    },
    signup: function (req, res) {
        var username = req.param('username');
        var password = req.param('password');
        
        console.log(username);
        console.log(password);
        
        Users.findOneByUsername(username).exec(function(err, usr){
            if (err) {
                res.send(500, { error: "DB Error" });
            } else if (usr) {
                res.send(400, {error: "Username already Taken"});
            } else {
                var hasher = require("password-hash");
                password = hasher.generate(password);

                Users.create({username: username, password: password}).exec(function(error, user) {
                if (error) {
                    res.send(500, {error: "DB Error"});
                } else {
                    req.session.user = user;
                    res.send(user);
                    console.log('should be taken to profile page here');
                    res.redirect('/profile');
                }
            });
            }      
        });
    },
    login: function (req, res) {
        var username = req.param('username');
        var password = req.param('password');
        
        console.log(username);
        console.log(password);

        Users.findOneByUsername(username).exec(function (err, usr) {
            if (err) {
                res.send(500, {error: "DB Error"});
            } else {
                if (usr) {
                    var hasher = require("password-hash");
                    if (hasher.verify(password, usr.password)) {
                        console.log('got passed password hash');
                        req.session.user = usr;
                        res.send(usr);
                        res.redirect('/profile');
                        console.log('created session for user');
                    } else {
                        res.send(400, {error: "Wrong Password"});
                        console.log('wrong password');
                    }
                } else {
                    res.send(404, {error: "User not Found"});
                    console.log('user not found');
                }
            }
        });
    },
    logout: function (req, res) {
        req.session.destroy(function(err) {
           return res.view();
      });
    },
    profile: function (req, res) {
        if(req.session.user){
            res.view({username: req.session.user.username});
        } else {
            res.redirect('/');   
        }
    }
};

module.exports = MainController;
