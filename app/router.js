import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Define routes
Router.map(function() {
    this.resource('todos', { path: '/' }, function() {
        this.route('active');
        this.route('complete');
    });
  this.route('todos/active');
  this.route('todos/complete');
});



// to avoid use of globals
export default Router;
