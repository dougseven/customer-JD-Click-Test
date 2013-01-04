var APP = (function($) {
    
	var selectedEntry = {};
    
	return {
		// Application Constructor
		initialize: function() {
			console.log("initialize");
			this.bindEvents();
		},
		// Bind Event Listeners
		//
		// Bind any events that are required on startup. Common events are:
		// 'load', 'deviceready', 'offline', and 'online'.
		bindEvents: function() {
			console.log("bindEvents");
			document.addEventListener('deviceready', this.onDeviceReady, false);
		},
		// deviceready Event Handler
		//
		// The scope of 'this' is the event.
		onDeviceReady: function() {
			console.log("onDeviceReady");
            // Nothing to do here
		},
		// Initialization of the home view
		//
		// Set up the ListView data binding here
		homeView_onInit: function() {
			var that = this;
            
            // This category list could be a local resource, or from a service endpoint.
			var categories = [
				{entryID: "1", displayText: "Category 1"},
				{entryID: "2", displayText: "Category 2"},
				{entryID: "3", displayText: "Category 3"}
			];
            
			$("#categoriesList").kendoMobileListView({
				click: function (e) {
					console.log("click fired");
					console.log("click: text = " + $(e.item).text());
                    
					if (e.dataItem) {
						that.selectedEntry = e.dataItem.entryID;                        
						navigator.notification.alert(
							"Entry ID " + that.selectedEntry + " was clicked (" + $(e.item).text() + ")", 
							null
							);
					}
				},
				template: $("#categoriesListTemplate").html(),
				dataSource: new kendo.data.DataSource({ data: categories })
			});
		},
        
		app: new kendo.mobile.Application(document.body, { transition: "slide", layout: "default-layout" })
	};
})(jQuery);