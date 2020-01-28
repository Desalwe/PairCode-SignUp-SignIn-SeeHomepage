const showHomepage = (req, res, next) => {
    res.render('index', { title: 'Wild Code School' });
}

module.exports = { showHomepage };