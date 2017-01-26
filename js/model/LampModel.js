// This is the model of our lamp.
var LampModel = function () {
	// The model contains all the information about the lamp.
	this.isLampOn = false

	// The model isn't aware of anything but itself.
	// When it changes, it simply notifies its listeners with custom events.
	this.changeLampStateEvent = new Event(this);
};

// The model also contains all the methods related to the lamp (business logic).
LampModel.prototype = {
	// This is a getter method for attribute isLampOn
	// When called, it simply returns isLampOn
	// Calling this method doesn't affect the model, therefore it doesn't send any notification.
	getLampState: function () {
		return this.isLampOn;
	},

	// This is a setter method for attribute isLampOn
	// When called, it changes the model, therefore it sends a custom notification.
	changeLampState: function () {
		// We toggle isLampOn by assigning the opposite of its current value.
		this.isLampOn = !this.isLampOn;
		// We send changeLampStateEvent event.
		this.changeLampStateEvent.notify();
	}

};
