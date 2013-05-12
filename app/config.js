// custom config goes here
require.config({
  // app startup pointing to entry point
  deps: ["quiz"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libs
    jquery: "../assets/js/libs/jquery-1.9.1.min",
    underscore: "../assets/js/libs/underscore-min",
    backbone: "../assets/js/libs/backbone-min",

    // Plugins
	
	// shim
    use: "../assets/js/plugins/use"
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    }
  }
});
