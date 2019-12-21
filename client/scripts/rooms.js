var Rooms = {

  roomname: '',
  roomnames: [],

  load: function(roomnames) {
    // put the data into the local storage
    for (let key in roomnames) {
      Rooms.roomnames.push(key);
    }
    Rooms.roomnames.sort();
    RoomsView.load(Rooms.roomnames);
  },

  // add event handler for select element
    // update Rooms.roomname onchange

};