const showHomepage = (req, res, next) => {
  res.render("homepage.html");
};

module.exports = { showHomepage };
