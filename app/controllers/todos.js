import Ember from 'ember';

// we used an ArrayController because we will have an array of todos
var TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			var title = this.get('newTitle');

			// create new todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// reset input
			this.set('newTitle', '');

			// save the new model
			todo.save();
		}
	}
});

export default TodosController;