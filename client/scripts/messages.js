var Messages = {
// store messages we reeived from server
// allow vierwes to retrieve messages for display

// initialize or load function that can recieve data from app.js fetch

// getters and setters

// allow customers to register as wanting message updates???

  // MessagesView.render(new stuff);
  _storage: {},

  load: function(data) { // object
    //data.results is an array of objects

    _storage = data;
    _storage.roomNames = {};

    _storage.results = _storage.results.map(function(message) {
      // return message.username && message.roomname && message.createdAt;
      if (!message.username) {
        message.username = 'NA';
      }
      if (!message.roomname) {
        message.roomname = 'NA';
      }
      if (!message.text) {
        message.text = 'NA';
      }
      _storage.roomNames[message.roomname] = true;
      return message;
    });

    MessagesView.render(_storage.results);
    Rooms.load(_storage.roomNames);
  },

  post: function(inputMessage) {
    // let obj = {
    //   username: App.username,
    //   text: inputMessage,
    //   roomname: // retrieve roomname from Rooms.roomname
    // };
  }

};



// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
//   createdAt: ...
// };