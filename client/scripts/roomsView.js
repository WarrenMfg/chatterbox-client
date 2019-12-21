var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  load: function(roomnames) {
    let html = roomnames.reduce((html, roomname) => {
      return html += '<option value="' + roomname + '">' + roomname + '</option>'
    }, '');

    RoomsView.$select.append(DOMPurify.sanitize(html));
  },

  render: function() {
    // filter by specific room
    // post to messagesView
  }

};

// use class to create room, then subclass for new room