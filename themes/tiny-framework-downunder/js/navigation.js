/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 * 
 * v.2.0.5
 */
( function() {
	var container, button, menu, links, subMenus;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );

	// Set menu items with submenus to aria-haspopup="true".
	for ( var i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}
	
	jQuery(document).keydown(function(e) {
      var key = e.which;
	  if(e.srcElement){
		  var nodeName = e.srcElement.nodeName;
		  if((nodeName==="A"||nodeName==="a") && 
			  (jQuery(e.srcElement).parent().parent().hasClass('nav-menu') || jQuery(e.srcElement).parent().parent().hasClass('sub-menu') )&&
			  (key == 38 || key == 40)){ 
			  e.preventDefault();
			  return false;
		  }
	  }
      return true;
	});
    
	jQuery("div.menu-navigation-container").attr("role","menubar");
	jQuery("#primary-menu").children("li").attr('aria-expanded', 'false');
	//Keep-start
	jQuery("#primary-menu").children("li").removeAttr('aria-expanded');
	jQuery("#primary-menu").children("li").removeAttr('aria-haspopup');
	jQuery("#primary-menu").children("li").attr('role','presentation');
	jQuery("#primary-menu").children("li").removeAttr('role');
	var topMenuItemList = jQuery("#primary-menu").children("li");
	var subMenuULs = jQuery("#primary-menu").children("li").children("ul");
	var menu_label = ["services","support","about"];
    var a_aria_label = ["Services Sub Menu","Support Sub Menu","About Sub Menu"];
	for(var index=1;index<=3;index++){
		jQuery(subMenuULs[index-1]).attr('aria-label',menu_label[index-1]);
		jQuery(topMenuItemList[index]).children('a').attr('aria-haspopup','true');
        jQuery(topMenuItemList[index]).children('a').attr('aria-label',a_aria_label[index-1]);
		jQuery(topMenuItemList[index]).children('a').attr('role','menuitem');
	}
	//keep-end
	//jQuery("#primary-menu").children("li").find('ul').css('visibility','hidden');
	jQuery("#primary-menu").removeAttr('aria-expanded');
    jQuery("#site-navigation").attr("aria-label","Primary Menu");
	
	subMenuItemsLength = jQuery("ul.sub-menu").children();
	var posinset = 1
	/*for(var index=0;index<=3;index++){
		jQuery(subMenuItemsLength[index]).attr('aria-setsize','4');
		jQuery(subMenuItemsLength[index]).attr('aria-posinset', posinset);
		posinset++;
	}
	posinset = 1;
	for(var index=4;index<=5;index++){
		jQuery(subMenuItemsLength[index]).attr('aria-setsize','2');
		jQuery(subMenuItemsLength[index]).attr('aria-posinset', posinset);
		posinset++;
	}
	posinset = 1;
	for(var index=6;index<=9;index++){
		jQuery(subMenuItemsLength[index]).attr('aria-setsize','4');
		jQuery(subMenuItemsLength[index]).attr('aria-posinset', posinset);
		posinset++;
	}*/
	
	jQuery(".search-form").keyup(function(event){
		if(event.keyCode === 9 && blurred){
			blurredMenu.removeClass('focus');
			blurredMenu = null;
			blurred = false;
		}
	}); 		
	
	var blurred = false;
	var blurredMenu = null;

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		//links[i].addEventListener( 'focus', toggleFocus, true );
		//links[i].addEventListener( 'blur', toggleFocus, true );
		jQuery(links[i]).parent().attr("role","menuitem");
		//KEEP Menu jQuery(links[i]).parent().parent().attr("role","group");
		jQuery(links[i]).parent().parent().attr("role","menu");
		jQuery(links[i]).parent().attr('role','presentation');
		//jQuery(topMenuItemList[0]).removeAttr('role');
		if(!jQuery(links[i]).parent().parent().hasClass('nav-menu')){
			links[i].setAttribute("tabindex","-1");		
		}
		if(jQuery(links[i]).parent().parent().hasClass('nav-menu')){
		    jQuery(links[i]).keyup(function(event){
				if(event.keyCode === 9 && blurred){
					blurredMenu.removeClass('focus');
					blurredMenu = null;
					blurred = false;
				}
		    }); 			
	    }
		if(jQuery(links[i]).parent().parent().hasClass('nav-menu')){
		    jQuery(links[i]).blur(function(event){
				blurred = true;
				blurredMenu = jQuery(event.target).parent();
				
		       }); 			
	    }
		if(jQuery(links[i]).parent().parent().hasClass('sub-menu')){
			//jQuery(links[i]).parent().parent().attr("aria-expanded","false");	
	    }
		links[i].addEventListener('keyup', handleArrowEvents, false );
		jQuery(links[i]).attr("role","menuitem");
		jQuery("#primary-menu").children("li").mouseover(function(event){
			jQuery("#primary-menu").children("li").find('ul').css('display','block');
				
		});
		jQuery("#primary-menu").children("li").mouseout(function(event){
			jQuery("#primary-menu").children("li").find('ul').css('display','none');
				
		});
		
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}
	
	//start mustan
	function handleArrowEvents(event){
		var self= this;
		var isDirectChildOfNavMenu = jQuery(self).parent().parent().hasClass('nav-menu');
		//console.log("isDirectChildOfNavMenu");
		//console.log(isDirectChildOfNavMenu);
		if((!isDirectChildOfNavMenu && event.keyCode===39)
			|| (isDirectChildOfNavMenu && event.keyCode===40)){
			var parentList = jQuery(self).parent('li')[0];
			//console.log("parentList");
			//console.log(parentList)
			if(parentList) {
				// On li elements toggle the class .focus and change the focus
					parentList.className += ' focus';
					subMenu = jQuery(parentList).children('ul.sub-menu');
					//console.log("Sub Menu");
					//console.log(subMenu);
					if(subMenu.length !== 0){
						//console.log("Submenu Anchor");
						window.sub = subMenu;
						//console.log(subMenu.find('a')[0]);
						subMenu.find('a')[0].focus();
						//subMenu.attr("aria-expanded","true");
						//KEEP jQuery(parentList).attr("aria-expanded","true");
					}
			}
		}
		
		//Handling DOWN Arrow Key for nonDirectChildOfNavMenu
		if(!isDirectChildOfNavMenu && event.keyCode===40){
			//console.log("down arrow on 2nd level menu items");
			var nextMenuItem = jQuery(self).parent('li').next();
			if(nextMenuItem.length > 0){
				nextMenuItem.find('a')[0].focus();
			}
			
		}
		
		//Handling UP Arrow Key for nonDirectChildOfNavMenu
		if(!isDirectChildOfNavMenu && event.keyCode===38){
			//console.log("up arrow on second level menu items");
			var prevMenuItem = jQuery(self).parent('li').prev();
			if(prevMenuItem.length > 0){
				prevMenuItem.find('a')[0].focus();
			}
		}
		
		//Handling LEFT Arrow Key for nonDirectChildOfNavMenu
		if(!isDirectChildOfNavMenu && (event.keyCode===37 || event.keyCode===27 || event.keyCode===39)){
			//console.log("left arrow on second level menu item");			
			var parentSubMenuList = jQuery(self).parents('ul.sub-menu').parents('li')[0];
			//jQuery(self).parents('ul.sub-menu').attr("aria-expanded","false");
			//window.ss = jQuery(parentSubMenuList).parents('ul.sub-menu, ul.nav-menu')[0];
			if(parentSubMenuList){
                jQuery(parentSubMenuList).removeClass('focus');
				//KEEP 	jQuery(parentSubMenuList).attr("aria-expanded","false");
                if(event.keyCode===39){
                    var nextMenu = jQuery(parentSubMenuList).next("li[role=menuitem]");
                    if(nextMenu.length != 0){
                        nextMenu.children()[0].focus();
                    }else{
                        jQuery(parentSubMenuList).find('a')[0].focus();
                    }                        
                }else{
                    jQuery(parentSubMenuList).find('a')[0].focus();
                }
			}
		}
		
		//Handling LEFT Arrow Key for DirectChildOfNavMenu
		if(isDirectChildOfNavMenu && event.keyCode===37){
			//console.log("left arrow on first level menu item");
			var prevMenuItem = jQuery(self).parent('li').prev();
			if(prevMenuItem.length > 0){
				prevMenuItem.find('a')[0].focus();
			}
		}
		
		//Handling RIGHT Arrow Key for DirectChildOfNavMenu
		if(isDirectChildOfNavMenu && event.keyCode===39){
			//console.log("right arrow on first level menu item");
			var nextMenuItem = jQuery(self).parent('li').next();
			if(nextMenuItem.length > 0){
				nextMenuItem.find('a')[0].focus();
			}
		}
        
        //Handling RIGHT Arrow Key for nonDirectChildOfNavMenu
        //this is commented due to hack we use to enable right arrow to jump to next parent menu, 
        //we cant generically support multilevel nested for right arrow action.
		/*if(!isDirectChildOfNavMenu && event.keyCode===39){
			//console.log("right arrow on first level menu item");
			var nextMenuItem = jQuery(self).parent('li').next();
			if(nextMenuItem.length > 0){
				nextMenuItem.find('a')[0].focus();
			}
		}*/
		
		if(event.keyCode===32){
			window.location.href = jQuery(event.target).attr('href');
			event.preventDefault();
		}
	}
	//end mustan
} )();
