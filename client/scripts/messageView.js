var MessageView = {

  render: _.template(`
    <div class="chat">
      <div class="username">
      </div>
      <p>Username: <%- username %></p>
      <div></div>
    </div>
  `)

};

/*
  var compiled = _.template("hello: <%= name %>");
  compiled({name: 'moe'});
  => "hello: moe"

  var template = _.template("<b><%- value %></b>");
  template({value: '<script>'});
  => "<b>&lt;script&gt;</b>"

  */
//