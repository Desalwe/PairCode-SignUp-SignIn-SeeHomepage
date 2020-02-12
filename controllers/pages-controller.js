const showHomepage = (req, res, next) => {
  res.render("homepage.html");
};

const showProfile = (req, res, next) => {
  res.render("profile.html");
};

module.exports = { showHomepage, showProfile };
