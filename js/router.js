/*
	Each route will have a controller and a template with the samne day as the route
	When you navigate to /markers, Ember.js will look for:
		App.MarkersRoute
		App.MarkersController
		markers template

	Emberjs will render the markers template into the {{outlet}} in the application template.

	<script type="text/x-handlebars" data-template-name="markers">
	<h4>markers title: {{title}}</h4>
	<ul>
	{{#each marker in controller}}
	<li>{{#linkTo 'marker' marker }}{{marker.Name}}{{/linkTo}}</li>
	{{/each}}
	</ul>
	</script>
	
	When you use a dynamic segment, the route's model will be based on the value of that
	segment provided by the user (marker)
	
	Here the route's name is marker, so Emberjs will look for:
		App.MarkerRoute
		App.MarkerController
		the marker template

	<script type="text/x-handlebars" data-template-name="marker">
	<h4>markers title: {{name}}</h4>
	<ul>
	<h4>{{Name}},{{Region}}</h4>
	</ul>
	</script>
*/

App.Router.map(function() {
		this.route('index',{path: '/'});				// template: index
		this.route('about',{path: '/about'});				// template: about
		this.resource('books',{path: '/books'},function() {		// template: books
				this.route('index',{path:'/index'});		// template: books.index
				this.resource('book',{path: '/:book_id'});	// template: books.book
		});

		this.resource('markers',{path: '/markers'});			// template: markers
		this.resource('marker',{path: '/markers/:marker_id'});		// template: marker
		this.route('records', {path: '/records'});			// template: records
		this.resource('record',{path: '/records/:record_id'});		// teplate: record

});

/*
	When your application boots, Emberjs will look for these objects:
	App.ApplicationRoute
	App.ApplicationController
	application template

	<script type="text/x-handlebars" data-template-name="application">
	<div>Application title: {{title}}</div>
	<div>info: {{info}}</div>
	<div>appName: {{appName}}</div>
	
	<h3>Hello, {{firstName}}</h3>
	{{outlet}}
	
	{{#linkTo 'index'}}Index{{/linkTo}}
	{{#linkTo 'markers'}}Markers{{/linkTo}}
	</script>

*/

/*
	August 3rd, works!

	Transitions into 'index' 
*/

App.ApplicationRoute = Ember.Route.extend({
		model: function() {
			console.log("ApplicationRoute, model");
			return ['SF bay', 'Navigation', 'Markers'];
		},
		setupController: function(controller, model){
			console.log("ApplicationRoute, setupController");
			controller.set('info',model);
		}
});

/*
	Controller for the application template (i.e.: template gets its properties from the controller
*/

/*
	August 3rd, works!
	
	<div>Application title: {{title}}</div>
	
	Transitions into 'index'
	
	this.route('index',{path: '/'});				// template: index
*/

App.ApplicationController = Ember.Controller.extend({
		firstName: 'steve',
		title: 'Markers Controller',
		appName: 'Markers'
});

/*
	Works on August 5th!

	this.route('about',{path: '/about'});

	<script type="text/x-handlebars" data-template-name="about">

	Transitioned into 'about'
*/

App.AboutRoute = Ember.Route.extend({
		model: function() {
			console.log("AboutRoute, model");
			return ['123', '456', '789']
		},

		setupController: function(controller,model){
			console.log("AboutRoute, setupController");
			controller.set('abt',model);
		}
});

/*
	this.route('about',{path: '/about'});

	<h5>appName : {{appName}}</h5>

	Transitioned into 'about'
*/

App.AboutController = Ember.Controller.extend({
		appName: 'AboutController'
});


/*
	From console:
	App.Book.val.content[0] 
	id : "1",
	clientId : 2,
	type : App.Book

	this.resource('books',{path: '/books'},function() {		// template: books
		this.route('index',{path:'/index'});		// template: books.index
		this.resource('book',{path: '/:book_id'});	// template: books.book
	});

	Transitioned into 'books.index'

	<script type="text/x-handlebars" data-template-name="books/index">
	{{#each controller}}
	{{#linkTo 'book' this}}{{Name}}{{/linkTo}}
	{{/each}}
*/

App.BooksIndexRoute = Ember.Route.extend({
		model: function() {
			console.log("BooksIndexRoute, model");
			App.Book.val= App.Book.find();
			return App.Book.find();
		}
});

/*
	Works on August 5th

	Only called on load/reload!

	this.resource('books',{path: '/books'},function() {		// template: books
		this.route('index',{path:'/index'});		// template: books.index
		this.resource('book',{path: '/:book_id'});	// template: books.book
	});

	<script type="text/x-handlebars" data-template-name="book">
	{{Name}}

	Transition into 'books.book'
*/

App.BookRoute = Ember.Route.extend({
		model: function(params) {
			console.log("BookRoute, model");
			App.Book.value = App.Book.find(params.book_id);
			return App.Book.find(params.book_id);
		}
});


/*
	Works on August 4th

	this.resource('books',{path: '/books'},function() {		// template: books
		this.route('index',{path:'/index'});		// template: books.index
		this.resource('book',{path: '/:book_id'});	// template: books.book
	});

	<script type="text/x-handlebars" data-template-name="records">

	Transitions into 'records'
	
	Console: App.Record.val.content[0]
		{
			id: "1",
			clientId : 5,
			type : App.Record
		}
*/

App.RecordsRoute = Ember.Route.extend({
		model: function() {
			console.log("RecordsRoute, model");
			App.Record.val = App.Record.find();
			return App.Record.find();
		}
});

/*
	Works on August 4th
	
	Only called on load/reload!
	
	this.route('records', {path: '/records'});			// template: records
	this.resource('record',{path: '/records/:record_id'});		// teplate: record

	Transitioned into 'record'
	
	<script type="text/x-handlebars" data-template-name="record">
	
	Name : {{Name}}
	
*/

App.RecordRoute = Ember.Route.extend({
		model: function(params) {
			console.log("RecordRoute, model");
			App.Record.single = App.Record.find(params.record_id);
			
			return App.Record.find(params.record_id);
		}
});

/*
	Emberjs will then invoke the App.IndexRoute before rendering the template
*/

/*
	August 3rd, works!

	Transitions into 'index'

	this.route('index',{path: '/'});				// template: index

	model seems to "read into" memory!

	<script type="text/x-handlebars" data-template-name="index">

	{{info}}
*/

App.IndexRoute = Ember.Route.extend({
		model: function() {
			console.log("IndexRoute, model");
			return ['Coed', 'Sat', 'at Park'];
		},
		
		setupController: function(controller,model){
			controller.set('info',model);
		}
});

/*
	August 3rd, works!

	<script type="text/x-handlebars" data-template-name="index">

	<h3>appName: {{appName}}</h3>
*/

App.IndexController = Ember.Controller.extend({
		appName: 'index controller'
});

/*
	Emberjs will then invoke the App.MarkersRoute before rendering the template

	this.resource('markers',{path: '/markers'});			// template: markers
	this.resource('marker',{path: '/markers/:marker_id'});		// template: marker

	<script type="text/x-handlebars" data-template-name="markers">

	{{#each marker in this}}
	<li>{{#linkTo 'marker' marker }}{{marker.Name}}{{/linkTo}}</li>
	{{/each}}

	Transitioned into 'markers'
*/

App.MarkersRoute = Ember.Route.extend({
		model: function() {
			console.log("MarkersRoute, model");
			App.Marker.val = App.Marker.find();
			return App.Marker.find();
		},

});

/*
	this.resource('markers',{path: '/markers'});			// template: markers
	this.resource('marker',{path: '/markers/:marker_id'});		// template: marker
	
	<script type="text/x-handlebars" data-template-name="marker">

	<h4>{{Name}},{{Region}}</h4>

	Transitioned into 'marker'
*/

App.MarkerRoute = Ember.Route.extend({
		model: function(params){
				console.log("MarkerRoute, model");
				App.Marker.single = App.Marker.find(params.marker_id);
				return App.Marker.find(params.marker_id);
		}
});
/*
	The route hander's model hook converts the dynamic :marker_id parameter into a model. The
	serialize hook converts a model object back into the URL parameters for this route

	<script type="text/x-handlebars" data-template-name="marker">
	<h4>markers title: {{name}}</h4>
	<ul>
	<h4>{{Name}},{{Region}}</h4>
	</ul>
	</script>
	
	Route: this.resource('marker',{path: '/markers/:marker_id'});

*/
