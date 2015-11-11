
console.debug("custom.js loaded from /themes/tiny-framework-downunder/js");
jQuery(document).ready(function($) { 
	console.debug("jQuery - page ready.....");
	
	/*   Site hacks jQuery - BEGIN   */
	$("#breadcrumbs").attr('role', 'region');	
	$("#breadcrumbs").attr('aria-label', 'breadcrumb navigation');	
	
	//Tool Tip needed for the Accessibility Tool bar buttons #159
	//https://github.com/mr-bobz/talarts/issues/159
	//Bobby: 10Nov2015, adding tooltip/title for accessibility toolbar buttons
	$(".a11y-toolbar .toggle-contrast").prop('title', "Toggle High Contrast");
	$(".a11y-toolbar .toggle-grayscale").prop('title', "Toggle Grayscale");
	$(".a11y-toolbar .toggle-fontsize").prop('title', "Toggle Font size");
	
	/*   Site hacks jQuery - END   */

	/*   EQUAL BLOCKS - BEGIN   */
	//Same height rows for responsive grids
	//Bobby: 10Nov2015
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;

	$('.equal-blocks').each(function() {

		$el = $(this);
		topPosition = $el.position().top;

		if (currentRowStart != topPosition) {
			// we just came to a new row.  Set all the heights on the completed row
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			   rowDivs[currentDiv].height(currentTallest);
			}
			
			// set the variables for the new row
			rowDivs.length = 0; // empty the array
			currentRowStart = topPosition;
			currentTallest = $el.height();
			rowDivs.push($el);

		} else {
			// another div on the current row.  Add it to the list and check if it's taller
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}

		// do the last row
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}

	});
	/*   EQUAL BLOCKS - END   */
	
});	