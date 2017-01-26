// This is the view of our lamp.
var LampView = function (model) {
	// The view is only aware of the model. It listens to its events and react accordingly.
	// It's responsible for the entire presentation of our lamp.
	// It's a visual representation of the model.
	this.model = model;

	// The view isn't aware of the controller.
	// When the user interacts with it, it simply notifies its listeners with custom events.
	this.changeLampStateEvent = new Event(this);

	// Upon instantiation, we execute the view's init() method.
	this.init();
};

LampView.prototype = {

	// This method executes a handful of useful methods that we need right away.
	init: function () {
		this.createChildren()
			.setupHandlers()
			.enable();
	},

	// This method sores DOM elements into variables.
	// It returns itself to allow method chaining.
	createChildren: function () {
		this.$switchButton = $('.lamp__switch');
		this.$lamp = $('.lamp');
		this.$lampGlare = $('.lamp__glare');
		this.$lampOnClass = 'lamp--on';

		return this;
	},

	// This method associates handlers with methods.
	// It returns itself to allow method chaining.
	setupHandlers: function () {
		// When notified by its bound event(s), handlers execute their associated methods.
		this.flipSwitchHandler = this.flipSwitch.bind(this);
		this.changeLampStateHandler = this.changeLampState.bind(this);

		return this;
	},

	// This method associates events with listeners.
	// It returns itself to allow method chaining.
	enable: function () {
		this.$switchButton.click(this.flipSwitchHandler);
		this.model.changeLampStateEvent.attach(this.changeLampStateHandler);

		return this;
	},

	// This method is called when flipSwitchHandler is called (which is attached to a click on $switchButton). 
	flipSwitch: function () {
		// We send a changeLampStateEvent event.
		this.changeLampStateEvent.notify();
	},

	// This method is responsible for handling state changes for the lamp.
	// It's called whenever the model sends a changeLampState event.
	changeLampState: function () {
		// We get the lamp state from the model and add or remove the appropriate class on the lamp DOM element.
		if (this.model.getLampState()) {
			return this.$lamp.addClass(this.$lampOnClass);
		}
		this.$lamp.removeClass(this.$lampOnClass);
	}

};
