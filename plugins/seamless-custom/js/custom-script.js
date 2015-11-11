jQuery(document).ready(function(){	

	jQuery('.dgx-donate-comment').remove();
/**
 * Donation Information 
 */

	jQuery('#_dgx_donate_repeating').find('p').text('');
	jQuery('#_dgx_donate_repeating').find('p').append('<input aria-labelledby="Repeating checkbox" name="_dgx_donate_repeating" id="dgx-donate-repeating" type="checkbox"><label for="_dgx_donate_repeating" style="width:auto!important;">I would like this donation to automatically repeat each month </label>');

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

	jQuery('input[value=100]').attr('aria-labelledby', 'Friend ($100)');
	jQuery('input[value=500]').attr('aria-labelledby', 'Sponsor ($500)');
	jQuery('input[value=1000]').attr('aria-labelledby', 'Patron ($1000)');
	jQuery('input[value=2500]').attr('aria-labelledby', 'Benefactor ($2500)');
	jQuery('input[value=5000]').attr('aria-labelledby', 'Angel ($5000)');
	jQuery('input[id=dgx-donate-other-radio]').attr('aria-labelledby', 'Other');

	var $header = jQuery('#header_desc').html();
	var $level100 = jQuery('#dgx_donate_giving_level_100').html();
	var $level500 = jQuery('#dgx_donate_giving_level_500').html();
	var $level1000 = jQuery('#dgx_donate_giving_level_1000').html();
	var $level2500 = jQuery('#dgx_donate_giving_level_2500').html();
	var $level5000 = jQuery('#dgx_donate_giving_level_5000').html();
	var $levelOther = jQuery('#other_radio_button').html();

	jQuery('#header_desc').remove();
	jQuery('#dgx_donate_giving_level_100').remove();
	jQuery('#dgx_donate_giving_level_500').remove();
	jQuery('#dgx_donate_giving_level_1000').remove();
	jQuery('#dgx_donate_giving_level_2500').remove();
	jQuery('#dgx_donate_giving_level_5000').remove();
	jQuery('#other_radio_button').remove();
	
	jQuery('#dgx-donate-form-donation-section').append('<fieldset id="donation_options">');
	jQuery('#donation_options').append($header);
	jQuery('#donation_options').append($level100);
	jQuery('#donation_options').append($level500);
	jQuery('#donation_options').append($level1000);
	jQuery('#donation_options').append($level2500);
	jQuery('#donation_options').append($level5000);
	jQuery('#donation_options').append($levelOther);
/**
 * Tribute Gift 
 */

	jQuery('#_dgx_donate_tribute_gift').text('');
	jQuery('#_dgx_donate_tribute_gift').append('<input id="dgx-donate-tribute" type="checkbox" data-check="_dgx_donate_honor_by_email" data-conceal=".postal-acknowledgement, .conceal-state, .conceal-postcode, .conceal-province" data-reveal=".in-honor" name="_dgx_donate_tribute_gift" aria-labelledby="Mailing-list checkbox"><label for="_dgx_donate_tribute_gift" style="width:auto !important;"> Check here to donate in honor or memory of someone</label>');

	jQuery('#_dgx_donate_memorial_gift').text('');
	jQuery('#_dgx_donate_memorial_gift').append('<div id="_dgx_donate_memorial_gift-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input type="checkbox" name="_dgx_donate_memorial_gift" aria-labelledby="Memorial gift checkbox"><label for="_dgx_donate_memorial_gift" style="width:auto !important;">Check here if this is a memorial gift</label>');

	jQuery('#_dgx_donate_honor_by_email').text('');
	jQuery('#_dgx_donate_honor_by_email').append('<div id="_dgx_donate_honor_by_email-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input type="radio" data-conceal=".postal-acknowledgement, .conceal-state, .conceal-postcode, .conceal-province" data-reveal=".email-acknowledgement" value="TRUE" checked="checked" name="_dgx_donate_honor_by_email" aria-labelledby="Honor by email radio"><label for="_dgx_donate_honor_by_email" style="width:auto !important;">Send acknowledgement via email</label>');

	jQuery('#_dgx_donate_honor_by_post_mail').text('');
	jQuery('#_dgx_donate_honor_by_post_mail').append('<div id="_dgx_donate_honor_by_post_mail-error-message" class="seamless-donations-error-message-field" style="display:none"></div><input type="radio" data-conceal=".email-acknowledgement" data-reveal=".postal-acknowledgement" value="FALSE" name="_dgx_donate_honor_by_email" aria-labelledby="Honor by email radio"><label for="_dgx_donate_honor_by_email" style="width:auto !important;">Send acknowledgement via postal mail</label>');

	jQuery('input[name=_dgx_donate_memorial_gift]').attr('aria-labelledby', 'Memorial gift checkbox');

	jQuery('input[name=_dgx_donate_honor_by_email]').attr('aria-labelledby', 'Honor by email radio');
	jQuery('input[name=_dgx_donate_honoree_email_name]').attr('aria-labelledby', 'Honoree email name radio');
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

	jQuery('#_dgx_donate_donor_first_name').find('label').replaceWith('<label for="_dgx_donate_donor_first_name">First Name: <span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_last_name').find('label').replaceWith('<label for="_dgx_donate_donor_last_name">Last Name: <span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_email').find('label').replaceWith('<label for="_dgx_donate_donor_email">Email: <span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_phone').find('label').replaceWith('<label for="_dgx_donate_donor_phone">Phone: <span class="dgx-donate-comment">(required)</span></label>');

	jQuery('input[name=_dgx_donate_donor_first_name]').attr('id', '_dgx_donate_donor_first_name');
	jQuery('input[name=_dgx_donate_donor_last_name]').attr('id', '_dgx_donate_donor_last_name');
	jQuery('input[name=_dgx_donate_donor_email]').attr('id', '_dgx_donate_donor_email');
	jQuery('input[name=_dgx_donate_donor_phone]').attr('id', '_dgx_donate_donor_phone');
	jQuery('input[name=_dgx_donate_add_to_mailing_list]').attr('id', '_dgx_donate_add_to_mailing_list');


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

	jQuery('#_dgx_donate_donor_address').find('label').replaceWith('<label for="_dgx_donate_donor_address">Address: <span class="dgx-donate-comment">(required)</span></label>');

	jQuery('#_dgx_donate_donor_city').find('label').replaceWith('<label for="_dgx_donate_donor_city">City: <span class="dgx-donate-comment">(required)</span></label>');	


	jQuery('#_dgx_donate_donor_address2').find('label').replaceWith('<label for="_dgx_donate_donor_address2">Address 2: <span class="dgx-donate-comment">(optional)</span></label>');

	jQuery('input[name=_dgx_donate_donor_address]').attr('id', '_dgx_donate_donor_address');
	jQuery('input[name=_dgx_donate_donor_address2]').attr('id', '_dgx_donate_donor_address2');
	jQuery('input[name=_dgx_donate_donor_city]').attr('id', '_dgx_donate_donor_city');
	jQuery('input[name=_dgx_donate_donor_zip]').attr('id', '_dgx_donate_donor_zip');
	jQuery('select[name=_dgx_donate_donor_state]').attr('id', '_dgx_donate_donor_state'); 				
	jQuery('select[name=_dgx_donate_donor_country]').attr('id', '_dgx_donate_donor_country');

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