var contactBtn=$('#contact-btn');
var textDiv=$('#card-text p');
var form=$('#contact-form');
var formBtn=$('#form-btn');


contactBtn.click(function(e){
  e.preventDefault();

textDiv.toggle();

});
form.submit(function(e){
  e.preventDefault();
  $.ajax({
    url: 'http:fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: form.serialize()

  })
  .done(function(){
    formBtn.html('message send');

  })
  .fail(function(){
     formBtn.hmtl('Error sendind message');

  });


});
