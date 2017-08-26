var service_id = ' gmail';
var template_id = ' template_mSVnfxAG';
fname = document.getElementByID('fname');
lname = document.getElementByID('lname');
email = document.getElementByID('emailid');
subject = document.getElementByID('subject');
var template_params = {
name: fname + lname,
reply_email: email,
message: subject
};

emailjs.send(service_id,template_id,template_params)

.then(function(response) {
   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
}, function(err) {
   console.log("FAILED. error=", err);
});