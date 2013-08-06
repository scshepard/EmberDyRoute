Simple examples of single and nested routes (both fixed and dynamic). Following is the Router.map() values:

App.Router.map(function() {
 this.route('index',{path: '/'});			// template: index
 //<script type="text/x-handlebars" data-template-name="application">

 this.route('about',{path: '/about'});			// template: about
 //<script type="text/x-handlebars" data-template-name="about">
 
 // nested routes
 this.resource('books',{path: '/books'},function() {	// template: books
 //<script type="text/x-handlebars" data-template-name="books">

  this.route('index',{path:'/index'});			// template: books.index
  //<script type="text/x-handlebars" data-template-name="books/index">
  
  this.resource('book',{path: '/:book_id'});		// template: books.book
  //
 });

 this.resource('markers',{path: '/markers'});		// template: markers
 //<script type="text/x-handlebars" data-template-name="markers">

 this.resource('marker',{path: '/markers/:marker_id'});	// template: marker
 //<script type="text/x-handlebars" data-template-name="marker">

 this.route('records', {path: '/records'});		// template: records
 //<script type="text/x-handlebars" data-template-name="records">

 this.resource('record',{path: '/records/:record_id'});	// template: record
 //<script type="text/x-handlebars" data-template-name="record">
});

See the index.html for template examples of displaying controller data (either Array or Object).
