/* GET 'Login' page */
const login = function(req, res){
    res.render('index', { title: 'Login' });
  };
  
  /* GET 'Register' page */
  const register = function(req, res){
    res.render('index', { title: 'Register' });
  };
  
  module.exports = {
    login,
    register
  };