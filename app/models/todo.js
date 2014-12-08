import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: attr('string'),
  isCompleted: attr('boolean')
});

export default Todo;
