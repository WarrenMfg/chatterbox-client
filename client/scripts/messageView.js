var MessageView = {

  render: _.template(`
    <div class="postDiv">
      <p class="username"><%- username %></p>
      <p class="text"><%- text %></p>
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