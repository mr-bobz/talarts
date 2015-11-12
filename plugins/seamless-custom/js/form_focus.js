if(typeof angular != 'undefined') {
	angular.module('accessibleForm', function () {
		return {
			link: function (scope, elem) {

				// set up event handler on the form element
				elem.on('submit', function () {

					// find the first invalid element
					var selectInvalid = elem[0].querySelector('.ng-invalid');

					// if we find one, set focus
					if (selectInvalid) {
						selectInvalid.focus();
					}
				});
			}
		};
	});
}
