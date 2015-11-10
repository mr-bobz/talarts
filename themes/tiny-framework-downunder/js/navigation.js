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

    jQuery("#site-navigation").attr("aria-label","Primary Menu. To navigate the menu with JAWS, turn JAWS Virtual Cursor Mode Off and use the arrow keys. For more screen reader information visit the accessibility link in the footer");

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
        jQuery(links[i]).parent().parent().attr("role","menu");
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
                        subMenu.attr("aria-expanded","true");
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
            jQuery(self).parents('ul.sub-menu').attr("aria-expanded","false");
            //window.ss = jQuery(parentSubMenuList).parents('ul.sub-menu, ul.nav-menu')[0];
            if(parentSubMenuList){
                jQuery(parentSubMenuList).removeClass('focus');
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
