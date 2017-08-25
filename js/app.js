(function() {
  $(document).ready(function() {
    return $('#contact-form').submit(function(e) {
      var email, message, fname, lname;
      fname = document.getElementById('fname');
      lname = document.getElementById('lname');
      email = document.getElementById('emailid');
      message = document.getElementById('subject');
      if (!fname.value || !lname.value || !email.value || !message.value) {
        alertify.error('Please check your entries');
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/sayyidishaq1996@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        return alertify.success('Message sent');
      }
    });
  });

}).call(this);
