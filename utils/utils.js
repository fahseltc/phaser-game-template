Utils = {};

//
// Colors
//

Utils.Colors = Object.freeze({
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  RED: "#FD0006",
  GREEN: "#0ACF00",
  BLUE: "#1B1BB3",
  GREY: "#808080"
});

//
// Text
//

Utils.Text = Utils.Text || {};

Utils.Text.default_style = {
  font: "20px arial",
  fill: Utils.Colors.WHITE,
  align: "center"
};

Utils.Text.create = function(x, y, text, options) {
  var all_options = {};
  all_options = Object.assign(all_options, Utils.Text.default_style, options);
  var label = game.add.text(x, y, text, all_options);
  label.anchor.set(0.5);
  return label;
};

Utils.Text.create_centered = function(y, text, options) {
  return this.create(game.width / 2, y, text, options);
};

Utils.Text.create_stroked = function(x, y, text, options) {
  options = options || {};
  options.stroke = "";
  options.strokeThickness = 3;
  return this.create(x, y, text, options);
};

Utils.Text.create_stroked_centered = function(y, text, options) {
  return this.create_stroked(game.width / 2, y, text, options);
};

//
// Cookies
//
Utils.Cookie = Utils.Cookie || {};

Utils.Cookie.set = function(cookie_name, cookie_value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie =
    cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
};

Utils.Cookie.get = function(cookie_name) {
  var name = cookie_name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

//
// Buttons
//
Utils.Button = Utils.Button || {};

Utils.Button.create = function(x, y, text, callback, width_percent) {
  var button = game.add.button(x, y, "menu_button", callback, this);
  button.width = button.width * (width_percent || 1);
  button.anchor.set(0.5, 0.5);

  var text_label = Utils.Text.create_stroked(x, y, text);
  text_label.anchor.set(0.5, 0.5);
};