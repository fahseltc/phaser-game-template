var load_state = {
  preload: function() {
    game.time.advancedTiming = true;

    game.load.image("menu_button", "assets/menu_button.png");
  },
  create: function() {},

  update: function() {
    game.state.start("menu");
  }
};