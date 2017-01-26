$(function() {
	// When document loads, we instantiate the model, the view and the controller.
	var model = new LampModel(),
		view = new LampView(model),
		controller = new LampController(model, view);
});
