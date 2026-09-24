/* GET 'home' page - list of books */
const booklist = function(req, res){
    res.render('index', { title: 'Home' });
  };
  
  /* GET 'Book info' page */
  const bookInfo = function(req, res){
    res.render('index', { title: 'Book info' });
  };
  
  /* GET 'Add review' page */
  const addReview = function(req, res){
    res.render('index', { title: 'Add review' });
  };
  
  module.exports = {
    booklist,
    bookInfo,
    addReview
  };
  