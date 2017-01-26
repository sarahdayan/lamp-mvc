// This is the controller of our lamp.
var LampController = function (model, view) {
	// The controller is aware of both the model and the view.
	// It's responsible for receiving events from the view, controlling them, and decide what to do in the context of our app.
	this.model = model;
	this.view = view;

	// Upon instantiation, we execute the controller's init() method.
	this.init();
};

LampController.prototype = {

	// This method executes a handful of useful methods that we need right away.
	init: function () {
		this.setupHandlers()
			.enable();
	},

	// This method associates handlers with methods.
	// It returns itself to allow method chaining.
	setupHandlers: function () {
		// When notified by its bound event(s), handlers execute their associated methods.
		this.changeLampStateHandler = this.changeLampState.bind(this);
		return this;
	},

	// This method associates events with listeners.
	// It returns itself to allow method chaining.
	enable: function () {
		// We attach a handler changeLampStateHandler to the view's changeLampStateEvent event.
		// changeLampStateHandler becomes a listener of changeLampStateEvent.
		// When the view's changeLampStateEvent event is fired, all its listeners are notified, therefore executed.
		this.view.changeLampStateEvent.attach(this.changeLampStateHandler);
		return this;
	},

	// This method directly calls changeLampState() from the model.
	changeLampState: function () {
		this.model.changeLampState();
	}

};
