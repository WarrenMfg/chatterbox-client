var FormView = {

  $form: $('form'),
  $inputMessage: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Messages.post(DOMPurify.sanitize(FormView.$inputMessage.val()));
    FormView.$inputMessage.val('');

    // sanitize --> return sanitized object here
    // let sanitize = function() { ... };
    // package up the input in {username, text, roomname} and send to messages.js

    // clear text input
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};