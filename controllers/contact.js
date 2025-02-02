exports.getContactUs = (req, res, next) => {
    res.render('contact-us', {
      pageTitle: 'Contact Us',
      path: '/contactus',
      formsCSS: true,
      productCSS: true
    });
  };
  
  exports.postContactUs = (req, res, next) => {
    res.redirect('/success');
  };

  exports.getSuccessPage = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success',
      formsCSS: true,
      productCSS: true
    });
  };
