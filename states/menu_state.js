var menu_state = {
  preload: function() {
    console.log("menu state preload");
  },
  create: function() {
    game.stage.backgroundColor = Utils.Colors.WHITE;
    Utils.Text.create_stroked_centered(100, "THIS IS A VIDEO GAME");

    Utils.Button.create(
      game.width / 2,
      300,
      "this button starts the game",
      function() {
        console.log("Button pressed");
        game.state.start("play");
      }
    );
  },
  update: function() {}
};