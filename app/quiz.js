require([
  "namespace",

  // Libs
  "jquery",
  "use!backbone",

  // Modules
  "modules/book"
],

function(namespace, $, Backbone, Quiz) {

  window.Library = new Quiz.Collection([
    { id: 1, title: "A Tale of Two Cities", author: "Charles Dickens", published: 1859 },
    { id: 2, title: "The Lord of the Rings", author: "J. R. R. Tolkien", published: 1954 },
    { id: 3, title: "The Hobbit", author: "J. R. R. Tolkien", published: 1937 },
    { id: 4, title: "And Then There Were None", author: "Agatha Christie", published: 1939 }
  ]);
  
  window.Questions =  new Quiz.Collection([
 	{ id: 1, text: "Tim Berners-Lee invented the Internet."},
	{ id: 2, text: "Dogs are better than cats."},
	{ id: 3, text: "Winter is coming."},
	{ id: 4, text: "Internet Explorer is the most advanced browser on Earth."}
  ]);
  
  window.Answers = new Quiz.Collection([
  	{ id: 1, text: "True"},
	{ id: 2, text: "False"},
	{ id: 3, text: "True"},
	{ id: 4, text: "False"}
  ]);
  

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      ""			: "index",
	  "question1"	: "",
    },

    index: function(){
      	var view = new Quiz.Views.List({collection: Library});
      	view.render(function(el){
        	$("#main").html(el);
      	})
		
    },
	
	question1: function(){
		//var view = new Quiz.Views.
	}
  });

  // Shorthand the application namespace
  var app = namespace.app;
  
	// jQuery Ready to kick everything off as entry point
  $(function() {
    app.router = new Router();
    Backbone.history.start();
  });
  
	// all relative nav should go through the routher unless deliniated accordingly ("a:not([data-bypass])")
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // let Backbones navigate function create the correct events
      Backbone.history.navigate(href, true);
    }
  });

});
