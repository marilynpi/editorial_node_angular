 
// expose this function to our app using module.exports
module.exports = function(passport) {
    // config/passport.js
    // load all the things we need
    var LocalStrategy = require('passport-local').Strategy;
    var User = require('./user');
    var user = new User();
    var Connection = require('./database');
    var connection = new Connection();
     
    //connection.query('USE editorial');
   
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize usuario out of session
     
    // used to serialize the user for the session
    passport.serializeUser(function(user, done){
        done(null, user.id_usuario);
    });
     
    // used to deserialize the user
    passport.deserializeUser(function(username, done) {
        var query = 'SELECT * FROM usuario WHERE id_usuario = '+username;

        connection.query(query,function(err,rows){
            done(err, rows[0]);
        });
    });
     
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
     
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
     
        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists
        connection.query("SELECT * FROM usuario WHERE id_usuario = '"+username+"'",function(err,rows){
        console.log(rows);
    
        if (err) return done(err);
        
        if (rows.length) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
             
            // if there is no user with that email
            // create the user
            // var newUserMysql = new Object();
            // newUserMysql.username = username;
            // newUserMysql.password = password; // use the generateHash function in our user model
            
            var insertQuery = "INSERT INTO usuario (id_usuario, password, id_permiso) values ('" + username +"','"+ password +"',1)";
            console.log(insertQuery);
            
            connection.query(insertQuery,function(err,rows){
            // newUserMysql.id = rows.insertId;
            // return done(null, newUserMysql);
            return done(null, rows.insertId);
            });
        }
        });
    }));
     
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
     
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',

            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with username and password from our form        
        return user.getUser(username, password, done,req);
    })); 
 
}; 
