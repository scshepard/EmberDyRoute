/*
	Module: Creating new model instance
	
	<h1>todos</h1>
	{{view Ember.TextField id="new-todo" placeholder="what nees" valueBinding="newTitle" action="createTodo"}}
	
	To handle new behavior, implement the controller class with our custom behavior.
	Class controller automatically associated with this template for us
	Controller now responds to user interaction by using its newTitle property as the title of the new todo
*/

App.MarkersController = Ember.ArrayController.extend({
		title: 'Markers Title',
			
		/*
			Displaying the number of incomplete todos
			Update to reflect the actual number of completed todos
		*/

		remaining: function() {
			return this.filterProperty('isCompleted', false).get('length');
		}.property('@each.isCompleted'),
		
		inflection: function() {
			var remaining = this.get('remainning');
			return remaining === 1 ? 'item' : 'itemx';
		}.property('remaining'),
		
		/*
			Module: Displaying a button to remove all completed todos
			Notes: Implemented the matching properties and method that will
			clear completed todos and persist these changes when the button
			is clicked
		*/
		
		hasCompleted: function() {
			return this.get('completed') > 0;
		}.property('completed'),
		
		completed: function() {
			return this.filterProperty('isCompleted', true).get('length');
		}.property('@each.isCompleted'),
});
