jQuery(document).ready(function(){	

	jQuery('.dgx-donate-comment').remove();
/**
 * Donation Information 
 */

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

	jQuery('input[value=100]').attr('name', '_dgx_donate_giving_level_100');
	jQuery('input[value=500]').attr('name', '_dgx_donate_giving_level_500');
	jQuery('input[value=1000]').attr('name', '_dgx_donate_giving_level_1000');
	jQuery('input[value=2500]').attr('name', '_dgx_donate_giving_level_2500');
	jQuery('input[value=5000]').attr('name', '_dgx_donate_giving_level_5000');
	jQuery('input[id=dgx-donate-other-radio]').attr('name', 'dgx-donate-other-radio');

	jQuery('input[value=100]').attr('aria-labelledby', 'Friend ($100)');
	jQuery('input[value=500]').attr('aria-labelledby', 'Sponsor ($500)');
	jQuery('input[value=1000]').attr('aria-labelledby', 'Patron ($1000)');
	jQuery('input[value=2500]').attr('aria-labelledby', 'Benefactor ($2500)');
	jQuery('input[value=5000]').attr('aria-labelledby', 'Angel ($5000)');
	jQuery('input[id=dgx-donate-other-radio]').attr('aria-labelledby', 'Other');


	jQuery('#dgx-donate-form-donation-section').wrapInner('<fieldset id="donation_options">');
	jQuery('#donation_options').children('#header_desc').children('p').wrapInner('<legend>');
	jQuery('#donation_options').children('#donation_header').prependTo('#dgx-donate-form-donation-section');

	jQuery('#_dgx_donate_repeating').find('p').text('');
	jQuery('#_dgx_donate_repeating').find('p').append('<input aria-labelledby="Repeating checkbox" name="_dgx_donate_repeating" id="_dgx-donate-repeating" type="checkbox"><label for="_dgx_donate_repeating" style="width:auto!important;">I would like this donation to automatically repeat each month </label>');


/**
 * Tribute Gift 
 */

	jQuery('#dgx-donate-form-tribute-section').children('#donation_header').children('h2').wrapInner('<legend>');
	jQuery('#dgx-donate-form-tribute-section').wrapInner('<fieldset id="tribute_gift_info">');
	

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
	jQuery('input[name=_dgx_donate_honoree_zip]').attr('id', '_dgx_donate_honoree_zip');

/*
 * Donor Information 
 */
	jQuery('#dgx-donate-form-donor-section').children('#donation_header').children('h2').wrapInner('<legend>');
	jQuery('#dgx-donate-form-donor-section').wrapInner('<fieldset id="donor_info">');
	
	jQuery('#dgx-donate-form-donor-section').children('#donation_header', '#_dgx_donate_donor_first_name', '#_dgx_donate_donor_last_name', '#_dgx_donate_donor_email', '#_dgx_donate_add_to_mailing_list', '#_dgx_donate_donor_phone').wrapAll('<fieldset id="donor-info" />');

	jQuery('#_dgx_donate_donor_first_name').find('label').replaceWith('<label for="_dgx_donate_donor_first_name">First Name: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_last_name').find('label').replaceWith('<label for="_dgx_donate_donor_last_name">Last Name: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_email').find('label').replaceWith('<label for="_dgx_donate_donor_email">Email: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_phone').find('label').replaceWith('<label for="_dgx_donate_donor_phone">Phone: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_add_to_mailing_list').contents().eq(2).wrap('<label for="_dgx_donate_add_to_mailing_list" />')

	jQuery('input[name=_dgx_donate_donor_first_name]').attr('id', '_dgx_donate_donor_first_name');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('id', '_dgx_donate_donor_last_name');
	jQuery('input[name=_dgx_donate_donor_email]').attr('id', '_dgx_donate_donor_email');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('id', '_dgx_donate_donor_phone');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('id', '_dgx_donate_add_to_mailing_list');

	jQuery('input[name=_dgx_donate_donor_first_name]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_email]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('required', 'required');


	jQuery('input[name=_dgx_donate_donor_first_name]').attr('ng-model', 'first_name');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('ng-model', 'last_name');
	jQuery('input[name=_dgx_donate_donor_email]').attr('ng-model', 'email');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('ng-model', 'phone');


	jQuery('input[name=_dgx_donate_donor_first_name]').attr('aria-labelledby', 'Firstname label');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('aria-labelledby', 'Lastname label');
	jQuery('input[name=_dgx_donate_donor_email]').attr('aria-labelledby', 'Email label');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('aria-labelledby', 'Phone label');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('aria-labelledby', 'mailing-list radio');
	
	jQuery('input[name=_dgx_donate_donor_first_name]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_email]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('aria-required', 'true');


/**
 * Donor Address 
 */
	jQuery('#dgx-donate-form-billing-section').children('#donation_header').children('h2').wrapInner('<legend>');
	jQuery('#dgx-donate-form-billing-section').wrapInner('<fieldset id="donor_info_address">');
	

	jQuery('#_dgx_donate_donor_address').find('label').replaceWith('<label for="_dgx_donate_donor_address">Address: </label><span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_city').find('label').replaceWith('<label for="_dgx_donate_donor_city">City: </label><span class="dgx-donate-comment">(required)</span></label>');	


	jQuery('input[name=_dgx_donate_donor_address]').attr('id', '_dgx_donate_donor_address');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('id', '_dgx_donate_donor_address2');
	jQuery('input[name=_dgx_donate_donor_city]').attr('id', '_dgx_donate_donor_city');
	jQuery('input[name=_dgx_donate_donor_zip]').attr('id', '_dgx_donate_donor_zip');
	jQuery('select[name=_dgx_donate_donor_state]').attr('id', '_dgx_donate_donor_state'); 				
	jQuery('select[name=_dgx_donate_donor_country]').attr('id', '_dgx_donate_donor_country');

	jQuery('input[name=_dgx_donate_donor_address]').attr('ng-model', 'address');
	jQuery('input[name=_dgx_donate_donor_city]').attr('ng-model', 'city');

	jQuery('input[name=_dgx_donate_donor_address]').attr('required', 'required');
	jQuery('input[name=_dgx_donate_donor_city]').attr('required', 'required');

	jQuery('input[name=_dgx_donate_donor_address]').attr('aria-labelledby', 'address label');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('aria-labelledby', 'address2 label');
	jQuery('input[name=_dgx_donate_donor_city]').attr('aria-labelledby', 'city label');
	jQuery('input[name=_dgx_donate_donor_zip]').attr('aria-labelledby', 'zip label');
	jQuery('select[name=_dgx_donate_donor_state]').attr('aria-labelledby', 'state dropbox'); 				
	jQuery('select[name=_dgx_donate_donor_country]').attr('aria-labelledby', 'country dropbox label');

	jQuery('input[name=_dgx_donate_donor_address]').attr('aria-required', 'true');
	jQuery('input[name=_dgx_donate_donor_city]').attr('aria-required', 'true');

	jQuery('input[name=dgx-donate-pay-enabled]').attr('alt', 'Donate Now');
	jQuery('input[name=dgx-donate-pay-disabled]').attr('alt', 'Donate button disabled');
	jQuery('input[name=dgx-donate-busy]').attr('alt', 'Processing transaction');

});