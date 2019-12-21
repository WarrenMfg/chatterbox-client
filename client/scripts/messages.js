var Messages = {

  _storage: {},

  load: function(data) { // object
    Messages._storage = {};
    Messages._storage.roomNames = {};

    Messages._storage.messages = data.results.map(function(message) {
      if (!message.username) {
        message.username = 'NA';
      }
      if (!message.roomname) {
        message.roomname = 'NA';
      }
      if (!message.text) {
        message.text = 'NA';
      }
      Messages._storage.roomNames[message.roomname] = true;
      return message;
    });

    Messages.show();
    Rooms.load(Messages._storage.roomNames);
  },

  show: function(roomname = '') {
    MessagesView.render(Messages._storage.messages.filter(m => {
      return roomname === '' || roomname === 'SELECT A ROOM' || m.roomname === roomname;
    }));
  },

  post: function(inputMessage) {
    let message = {
      username: App.username,
      text: inputMessage,
      roomname: Rooms.roomname
    };

    // Parse.create(message);
    console.log(Messages._storage);
    Messages._storage.messages.unshift(message);
    Messages.show(Rooms.roomname);
  }

};



// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
//   createdAt: ...
// };