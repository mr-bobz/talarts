jQuery(document).ready(function(){	

	jQuery('.dgx-donate-comment').remove();
/**
 * Donation Information 
 */
	jQuery('#other_radio_button').contents().eq(2).wrap('<label for="dgx-donate-other-radio" />');
	
	var $checkbox = jQuery('#donation_options').children("div").html();
	jQuery('#donation_options').children("div").remove();
	jQuery('#dgx-donate-form-donation-section').append($checkbox);

	jQuery('#dgx_donate_giving_level_500').prepend('<br/>');
	jQuery('#dgx_donate_giving_level_1000').prepend('<br/>');
	jQuery('#dgx_donate_giving_level_2500').prepend('<br/>');
	jQuery('#dgx_donate_giving_level_5000').prepend('<br/>');
	jQuery('#other_radio_button').prepend('<br/>');

	jQuery('input[value=100]').attr('id', '_dgx_donate_giving_level_100');
	jQuery('input[value=500]').attr('id', '_dgx_donate_giving_level_500');
	jQuery('input[value=1000]').attr('id', '_dgx_donate_giving_level_1000');
	jQuery('input[value=2500]').attr('id', '_dgx_donate_giving_level_2500');
	jQuery('input[value=5000]').attr('id', '_dgx_donate_giving_level_5000');

	//Bobby: all radio inputs should have same name to make only one selectable!
	//jQuery('input[value=100]').attr('name', '_dgx_donate_giving_level_100');
	//jQuery('input[value=500]').attr('name', '_dgx_donate_giving_level_500');
	//jQuery('input[value=1000]').attr('name', '_dgx_donate_giving_level_1000');
	//jQuery('input[value=2500]').attr('name', '_dgx_donate_giving_level_2500');
	//jQuery('input[value=5000]').attr('name', '_dgx_donate_giving_level_5000');
	//jQuery('input[id=dgx-donate-other-radio]').attr('name', 'dgx-donate-other-radio');

	//Bobby: aria-labelledby should point to an id
	/*jQuery('input[value=100]').attr('aria-labelledby', 'Friend ($100)');
	jQuery('input[value=500]').attr('aria-labelledby', 'Sponsor ($500)');
	jQuery('input[value=1000]').attr('aria-labelledby', 'Patron ($1000)');
	jQuery('input[value=2500]').attr('aria-labelledby', 'Benefactor ($2500)');
	jQuery('input[value=5000]').attr('aria-labelledby', 'Angel ($5000)');
	jQuery('input[id=dgx-donate-other-radio]').attr('aria-labelledby', 'Other');*/
	
	jQuery('input[value=100]').next().attr('id', '_dgx_donate_giving_level_100_label');
	jQuery('input[value=500]').next().attr('id', '_dgx_donate_giving_level_500_label');
	jQuery('input[value=1000]').next().attr('id', '_dgx_donate_giving_level_1000_label');
	jQuery('input[value=2500]').next().attr('id', '_dgx_donate_giving_level_2500_label');
	jQuery('input[value=5000]').next().attr('id', '_dgx_donate_giving_level_5000_label');
	jQuery('input[id=dgx-donate-other-radio]').next().attr('id', '_dgx-donate-other-radio_label');
	
	jQuery('input[value=100]').attr('aria-labelledby', '_dgx_donate_giving_level_100_label');
	jQuery('input[value=500]').attr('aria-labelledby', '_dgx_donate_giving_level_500_label');
	jQuery('input[value=1000]').attr('aria-labelledby', '_dgx_donate_giving_level_1000_label');
	jQuery('input[value=2500]').attr('aria-labelledby', '_dgx_donate_giving_level_2500_label');
	jQuery('input[value=5000]').attr('aria-labelledby', '_dgx_donate_giving_level_5000_label');
	jQuery('input[id=dgx-donate-other-radio]').attr('aria-labelledby', '_dgx-donate-other-radio_label');
	
	var $legend = '<div id="header_desc"><div id="header_desc-error-message" style="display:none" class="seamless-donations-error-message-field"></div><p><legend id="legend_donate">I would like to make a donation in the amount of:</legend></p></div>';

	//Bobby: 13Nov2015: fixing the fieldset-legend issue
	var donationsHeader =  jQuery('#dgx-donate-form-donation-section > #header_desc').remove();
	var fieldSet = (jQuery("#dgx-donate-form-donation-section > span").wrapAll('<fieldset id="donation_options"/>'));
	jQuery('<legend id="legend_donate">I would like to make a donation in the amount of:</legend>').prependTo(jQuery("#dgx-donate-form-donation-section > fieldset"));
	
	jQuery('#donation_options > #other_radio_button').remove();	
	jQuery('#dgx-donate-form-donation-section > #_dgx_donate_user_amount').remove();	
	
	//jQuery('<legend id="legend_donate">I would like to make a donation in the amount of:</legend>').insertBefore(jQuery('#dgx-donate-form-donation-section > fieldset > span').get(0));
	
	//donationsNodeList.before('<legend id="legend_donate">I would like to make a donation in the amount of:</legend>');
	//donationsNodeList = jQuery(donationsNodeList).wrap('<fieldset id="donation_options"></fieldset>');
	//jQuery('#dgx-donate-form-donation-section > #donation_header').after(donationsNodeList);
	//donationsNodeList.insertAfter('#dgx-donate-form-donation-section > #donation_header');
	
	//jQuery('#dgx-donate-form-donation-section').wrapInner('<fieldset id="donation_options"></fieldset>');
	//jQuery('#dgx-donate-form-donation-section').children('span').wrap('<fieldset id="donation_options"></fieldset>');
	
	//jQuery('#donation_options').children('#header_desc').children('p').wrapInner('<legend>');
	//jQuery('#donation_options').children('#donation_header').prependTo('#dgx-donate-form-donation-section');


	var $checkbox = '<div id="_dgx_donate_repeating"><div id="_dgx_donate_repeating-error-message" class="seamless-donations-error-message-field" style="display:none"></div><p><input id="_dgx-donate-repeating" type="checkbox" name="_dgx_donate_repeating" aria-labelledby="_dgx-donate-repeating_label"><label id="_dgx-donate-repeating_label" style="width:auto!important;" for="_dgx-donate-repeating">I would like this donation to automatically repeat each month </label></p></div>';
	
	//jQuery('#donation_options').children('div').remove();
	//jQuery('#donation_options').prepend($legend);
	jQuery('#dgx-donate-form-donation-section').append($checkbox);

	jQuery('#_dgx_donate_repeating').find('p').text('');
	jQuery('#_dgx_donate_repeating').find('p').append('<input aria-labelledby="_dgx-donate-repeating_label" name="_dgx_donate_repeating" id="_dgx-donate-repeating" type="checkbox"><label id="_dgx-donate-repeating_label" for="_dgx-donate-repeating" style="width:auto!important;">I would like this donation to automatically repeat each month </label>');


/**
 * Tribute Gift 
 */
	//Bobby: 13Nov2015, disabled Tribute in Seamless Donations plugin
	/*jQuery('#dgx-donate-form-tribute-section').children('#donation_header').children('h2').wrapInner('<legend></legend>');
	jQuery('#dgx-donate-form-tribute-section').wrapInner('<fieldset id="tribute_gift_info"></fieldset>');
	

	jQuery('#_dgx_donate_tribute_gift').text('');
	jQuery('#_dgx_donate_tribute_gift').append('<input id="dgx-donate-tribute" type="checkbox" data-check="_dgx_donate_honor_by_email" data-conceal=".postal-acknowledgement, .conceal-state, .conceal-postcode, .conceal-province" data-reveal=".in-honor" name="_dgx_donate_tribute_gift" aria-labelledby="Mailing-list checkbox"><label for="dgx-donate-tribute" style="width:auto !important;"> Check here to donate in honor or memory of someone</label>');


	jQuery('#_dgx_donate_memorial_gift').text('');
	jQuery('#_dgx_donate_memorial_gift').append('<div id="_dgx_donate_memorial_gift-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input id="_dgx_donate_memorial_gift_checkbox" type="checkbox" name="_dgx_donate_memorial_gift" aria-labelledby="Memorial gift checkbox"><label for="_dgx_donate_memorial_gift_checkbox" style="width:auto !important;">Check here if this is a memorial gift</label>');

	jQuery('#_dgx_donate_honor_by_email').text('');
	jQuery('#_dgx_donate_honor_by_email').append('<div id="_dgx_donate_honor_by_email-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input id="_dgx_donate_honor_by_email_checkbox" type="radio" data-conceal=".postal-acknowledgement, .conceal-state, .conceal-postcode, .conceal-province" data-reveal=".email-acknowledgement" value="TRUE" checked="checked" name="_dgx_donate_honor_by_email_radio" aria-labelledby="Honor by email radio"><label for="_dgx_donate_honor_by_email_radio" style="width:auto !important;">Send acknowledgement via email radio button</label>');

	jQuery('#_dgx_donate_honor_by_post_mail').text('');
	jQuery('#_dgx_donate_honor_by_post_mail').append('<div id="_dgx_donate_honor_by_post_mail-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input id="_dgx_donate_honor_by_post_mail_radio" type="radio" data-conceal=".email-acknowledgement" data-reveal=".postal-acknowledgement" value="FALSE" name="_dgx_donate_honor_by_post_mail_radio" aria-labelledby="Honor by postal mail radio button"><label for="_dgx_donate_honor_by_post_mail_radio" style="width:auto !important;">Send acknowledgement via postal mail</label>');

	jQuery('input[name=_dgx_donate_memorial_gift]').attr('aria-labelledby', 'Memorial gift checkbox');
	jQuery('input[name=_dgx_donate_honoree_email_name]').attr('aria-labelledby', 'Honoree email name');
	jQuery('input[name=_dgx_donate_honoree_email]').attr('aria-labelledby', 'Honoree email label');


	jQuery('input[name=_dgx_donate_honoree_post_name]').attr('aria-labelledby', 'Honoree Name label');
	jQuery('input[name=_dgx_donate_honoree_address]').attr('aria-labelledby', 'Address label');	
	jQuery('input[name=_dgx_donate_honoree_city]').attr('aria-labelledby', 'City label');
	jQuery('select[name=_dgx_donate_honoree_state]').attr('aria-labelledby', 'State dropbox'); 				
	jQuery('select[name=_dgx_donate_honoree_country]').attr('aria-labelledby', 'Country dropbox label');
	jQuery('input[name=_dgx_donate_honoree_zip]').attr('aria-labelledby', 'Zip label');

	jQuery('input[name=_dgx_donate_memorial_gift]').attr('id', '_dgx_donate_memorial_gift');
	jQuery('input[name=_dgx_donate_honor_by_email]').attr('id', '_dgx_donate_honor_by_email');
	jQuery('input[name=_dgx_donate_honoree_email_name]').attr('id', '_dgx_donate_honoree_email_name');
	jQuery('input[name=_dgx_donate_honoree_email]').attr('id', '_dgx_donate_honoree_email');

	jQuery('input[name=_dgx_donate_honoree_name]').attr('id', '_dgx_donate_honoree_name');
	jQuery('input[name=_dgx_donate_honoree_post_name]').attr('id', '_dgx_donate_honoree_post_name');
	jQuery('input[name=_dgx_donate_honoree_address]').attr('id', '_dgx_donate_honoree_address');	
	jQuery('input[name=_dgx_donate_honoree_city]').attr('id', '_dgx_donate_honoree_city');
	jQuery('select[name=_dgx_donate_honoree_state]').attr('id', '_dgx_donate_honoree_state'); 				
	jQuery('select[name=_dgx_donate_honoree_country]').attr('id', '_dgx_donate_honoree_country');
	jQuery('input[name=_dgx_donate_honoree_zip]').attr('id', '_dgx_donate_honoree_zip');*/

/*
 * Donor Information 
 */
	jQuery('#dgx-donate-form-donor-section').children('#donation_header').children('h2').wrapInner('<legend></legend>');
	jQuery('#dgx-donate-form-donor-section').wrapInner('<fieldset id="donor_info"></fieldset>');
	
	//jQuery('#dgx-donate-form-donor-section').children('#donation_header', '#_dgx_donate_donor_first_name', '#_dgx_donate_donor_last_name', '#_dgx_donate_donor_email', '#_dgx_donate_add_to_mailing_list', '#_dgx_donate_donor_phone').wrapAll('<fieldset id="donor-info" />');

	jQuery('#_dgx_donate_donor_first_name').find('label').replaceWith('<label id="_dgx_donate_donor_first_name_label" for="_dgx_donate_donor_first_name">First Name: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_last_name').find('label').replaceWith('<label id="_dgx_donate_donor_last_name_label" for="_dgx_donate_donor_last_name">Last Name: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_email').find('label').replaceWith('<label id="_dgx_donate_donor_email_label" for="_dgx_donate_donor_email">Email: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_phone').find('label').replaceWith('<label id="_dgx_donate_donor_phone_label" for="_dgx_donate_donor_phone">Phone: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_add_to_mailing_list').contents().eq(2).wrap('<label id="_dgx_donate_add_to_mailing_list_label" for="_dgx_donate_add_to_mailing_list" />');

	jQuery('input[name=_dgx_donate_donor_first_name]').attr('id', '_dgx_donate_donor_first_name');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('id', '_dgx_donate_donor_last_name');
	jQuery('input[name=_dgx_donate_donor_email]').attr('id', '_dgx_donate_donor_email');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('id', '_dgx_donate_donor_phone');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('id', '_dgx_donate_add_to_mailing_list');

	jQuery('input[name=_dgx_donate_donor_first_name]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_email]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('required', 'required');

	//Bobby: 13Nov2015, disabling AngularJS code
	//jQuery('input[name=_dgx_donate_donor_first_name]').attr('ng-model', 'first_name');
	//jQuery('input[name=_dgx_donate_donor_last_name]').attr('ng-model', 'last_name');
	//jQuery('input[name=_dgx_donate_donor_email]').attr('ng-model', 'email');
	//jQuery('input[name=_dgx_donate_donor_phone]').attr('ng-model', 'phone');

	//Bobby: 13Nov2015, set an id for aria-labelledby
	/*jQuery('input[name=_dgx_donate_donor_first_name]').attr('aria-labelledby', 'Firstname label');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('aria-labelledby', 'Lastname label');
	jQuery('input[name=_dgx_donate_donor_email]').attr('aria-labelledby', 'Email label');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('aria-labelledby', 'Phone label');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('aria-labelledby', 'mailing-list radio');*/
	
	jQuery('input[name=_dgx_donate_donor_first_name]').attr('aria-labelledby', '_dgx_donate_donor_first_name_label');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('aria-labelledby', '_dgx_donate_donor_last_name_label');
	jQuery('input[name=_dgx_donate_donor_email]').attr('aria-labelledby', '_dgx_donate_donor_email_label');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('aria-labelledby', '_dgx_donate_donor_phone_label');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('aria-labelledby', '_dgx_donate_add_to_mailing_list_label');	
	
	jQuery('input[name=_dgx_donate_donor_first_name]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_email]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('aria-required', 'true');


/**
 * Donor Address 
 */
	jQuery('#dgx-donate-form-billing-section').children('#donation_header').children('h2').wrapInner('<legend></legend>');
	jQuery('#dgx-donate-form-billing-section').wrapInner('<fieldset id="donor_info_address"></fieldset>');
	

	jQuery('#_dgx_donate_donor_address').find('label').replaceWith('<label id="_dgx_donate_donor_address_label" for="_dgx_donate_donor_address">Address: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_city').find('label').replaceWith('<label id="_dgx_donate_donor_city_label" for="_dgx_donate_donor_city">City: </label><span class="dgx-donate-comment">(required)</span></label>');	


	jQuery('input[name=_dgx_donate_donor_address]').attr('id', '_dgx_donate_donor_address');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('id', '_dgx_donate_donor_address2');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('class', 'address2');
	jQuery('input[name=_dgx_donate_donor_city]').attr('id', '_dgx_donate_donor_city');
	jQuery('input[name=_dgx_donate_donor_zip]').attr('id', '_dgx_donate_donor_zip');
	jQuery('select[name=_dgx_donate_donor_state]').attr('id', '_dgx_donate_donor_state'); 				
	jQuery('select[name=_dgx_donate_donor_country]').attr('id', '_dgx_donate_donor_country');

	//Bobby: 13Nov2015, disabling AngularJS code
	//jQuery('input[name=_dgx_donate_donor_address]').attr('ng-model', 'address');
	//jQuery('input[name=_dgx_donate_donor_city]').attr('ng-model', 'city');

	jQuery('input[name=_dgx_donate_donor_address]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_city]').attr('required', 'required');

	/*jQuery('input[name=_dgx_donate_donor_address]').attr('aria-labelledby', 'address label');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('aria-labelledby', 'address2 label');
	jQuery('input[name=_dgx_donate_donor_city]').attr('aria-labelledby', 'city label');
	jQuery('input[name=_dgx_donate_donor_zip]').attr('aria-labelledby', 'zip label');
	jQuery('select[name=_dgx_donate_donor_state]').attr('aria-labelledby', 'state dropbox'); 				
	jQuery('select[name=_dgx_donate_donor_country]').attr('aria-labelledby', 'country dropbox label');*/
	
	jQuery('input[name=_dgx_donate_donor_address]').attr('aria-labelledby', '_dgx_donate_donor_address_label');
	jQuery('input[name=_dgx_donate_donor_city]').attr('aria-labelledby', '_dgx_donate_donor_city_label');
	
	jQuery('#_dgx_donate_donor_address2-error-message').next().attr('id', '_dgx_donate_donor_address2_label');	
	jQuery('input[name=_dgx_donate_donor_address2]').attr('aria-labelledby', '_dgx_donate_donor_address2_label');	
	jQuery('#_dgx_donate_donor_zip-error-message').next().attr('id', '_dgx_donate_donor_zip_label');	
	jQuery('input[name=_dgx_donate_donor_zip]').attr('aria-labelledby', '_dgx_donate_donor_zip_label');
	jQuery('#_dgx_donate_donor_state-error-message').next().attr('id', '_dgx_donate_donor_state_label');	
	jQuery('select[name=_dgx_donate_donor_state]').attr('aria-labelledby', '_dgx_donate_donor_state_label'); 			
	jQuery('#_dgx_donate_donor_country-error-message').next().attr('id', '_dgx_donate_donor_country_label');		
	jQuery('select[name=_dgx_donate_donor_country]').attr('aria-labelledby', '_dgx_donate_donor_country_label');

	jQuery('input[name=_dgx_donate_donor_address]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_city]').attr('aria-required', 'true');

	jQuery('input[name=dgx-donate-pay-enabled]').attr('alt', 'Donate Now');
	jQuery('input[name=dgx-donate-pay-disabled]').attr('alt', 'Donate button disabled');
	jQuery('input[name=dgx-donate-busy]').attr('alt', 'Processing transaction');
	

});