var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readRoomNames((data) => {
      // examine the response from the server request:
      console.log('keys: "roomname"', data);
    });

  },

  render: function() {
    // filter by specific room
    // post to messagesView
  }

};

// use class to create room, then subclass for new room