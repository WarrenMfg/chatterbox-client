var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // register MessageView as wanting updates from Messages???
    // Messages.registerMeForUpdates(MessageView.render);
  },

  render: function(messages) {
    // who calls render? It's a callback given to Messages?

    // loop through all messages
    //   possibly filter on room here?
    //   call messageView
    MessagesView.$chats.empty();
    messages.forEach(m => MessagesView.$chats.append(DOMPurify.sanitize(MessageView.render(m))));
  }

};