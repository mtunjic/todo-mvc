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
		},
		clearCompleted: function() {
        	var completed = this.filterBy('isCompleted', true);
        	completed.invoke('deleteRecord');
        	completed.invoke('save');
    	}
	}, // end actions


	// this is a computed properties
	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),
		 
	inflection: function() {
		var remaining = this.get('remaining');
		return (remaining === 1) ? 'item' : 'items';
	}.property('remaining'),

	hasCompleted: function() {
    	return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
	    return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function(key, value) {
	    console.log(key + ": " + value);
	    if (value === undefined) {
	        return this.get('length') > 0 && this.isEvery('isCompleted', true);
	    } else {
	        this.setEach('isCompleted', value);
	        this.invoke('save');
	        return value;
	    }
	}.property('@each.isCompleted')

});

export default TodosController;