const index = function(req, res){
    res.render('index', { title: 'BookShelf' });
  };
  
  module.exports = {
    index
  };