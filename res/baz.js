define( "baz", [ "bar" ], function(bar) {
	return {
		z: function() {
			"use strict";
			console.log("In Baz. Bar: ", bar);
		}
	};
});