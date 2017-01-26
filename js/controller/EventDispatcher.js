// This is what handles all events in the lamp.
// It can be used anywhere in the app.
var Event = function (sender) {
	// We identify the event's sender right away so its listeners can be properly triggered.
	this.sender = sender;
	this.listeners = [];
};

Event.prototype = {

	// This method adds any handler passed as an argument into the list of listeners.
	attach: function (listener) {
		this.listeners.push(listener);
	},

	// This method notifies all listeners when an event is triggered.
	// Arguments can be passed to be handled by receiving handler.
	notify: function (args) {
		for (var i = 0; i < this.listeners.length; i += 1) {
			this.listeners[i](this.sender, args);
		}
	}

};
