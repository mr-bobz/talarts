<?php
/*
Plugin Name: seamless Custom
Plugin URI:  plugins/seamless-custom/
Description: Modification to 
Version:     0.3
Author:      Team downunder
Author URI:  http://plugins/seamless-custom/
Text Domain: seamless-custom
Domain Path: /lang
 */

function seamless_custom_plugin_loaded () {

	load_plugin_textdomain ( 'seamless-custom', false, dirname ( plugin_basename ( __FILE__ ) ) . '/languages/' );
}

add_action ( 'plugins_loaded', 'seamless_custom_plugin_loaded' );

function seamless_custom_queue_jQuery  () {
	
	wp_enqueue_script( 'seemless_custom_jQuery', plugins_url( '/js/custom-script.js' , __FILE__ ), array('jquery') );
	
}

add_action( 'wp_enqueue_scripts','seamless_custom_queue_jQuery');

function seamless_custom_queue_stylesheet () {

	$style_url = plugins_url ( '/css/style.css', __FILE__ );

	wp_register_style ( 'seamless_custom_css', $style_url );
	wp_enqueue_style ( 'seamless_custom_css' );
}

add_action ( 'wp_enqueue_scripts', 'seamless_custom_queue_stylesheet' );


function donation_level($array){
    
    $customDonationLevels = array(100, 500, 1000, 2500, 5000);
    return $customDonationLevels;
    
}

add_filter( 'dgx_donate_giving_levels', 'donation_level'); 

function modify_donation_level_name($array){

	$array['elements']['dgx_donate_giving_level_100']['select'] = true;
    
	$array['elements']['dgx_donate_giving_level_100']['prompt'] = '<label for="_dgx_donate_giving_level_100">Friend ($100)</label>';
   	$array['elements']['dgx_donate_giving_level_500']['prompt'] = '<label for="_dgx_donate_giving_level_500">Sponsor ($500)</label>';
   	$array['elements']['dgx_donate_giving_level_1000']['prompt'] = '<label for="_dgx_donate_giving_level_1000">Patron ($1000)</label>';
    	$array['elements']['dgx_donate_giving_level_2500']['prompt'] = '<label for="_dgx_donate_giving_level_2500">Benefactor ($2500)</label>';
    	$array['elements']['dgx_donate_giving_level_5000']['prompt'] = '<label for="_dgx_donate_giving_level_5000">Angel ($5000)</label>';
	$array['elements']['dgx-donate-other-radio']['prompt'] = '<label for="dgx-donate-other-radio">Other</label>';

    return $array;
}

add_filter( 'seamless_donations_form_donation_section', 'modify_donation_level_name'); 

function modify_seamless_donations_get_donation_section($array){
	$array['elements']['header_desc']['before'] = '<p><legend>';
	$array['elements']['header_desc']['after'] = '</legend></p>';

	return $array;
}

add_filter('seamless_donations_form_donation_section','modify_seamless_donations_get_donation_section'); 

/**
function modify_seamless_donations_get_donor_section($array) {
	$array['elements']['_dgx_donate_donor_first_name']['before'] = esc_html__ ('First Name:', 'seamless-donations') . "<span class='dgx-donate-comment'>" . esc_html__ ('(required)') . "</span>";

	return $array;
}

add_filter('seamless_donations_form_donor_section', 'modify_seamless_donations_get_donor_section');

function modify_seamless_donations_get_billing_section ($array) {
	
	$array['elements']['_dgx_donate_donor_address']['before'] = esc_html__ ('Address: ', 'seamless-donations') . "<span class='dgx-donate-comment'>" . esc_html__ ('(required)')."</span>";

	$array['elements']['_dgx_donate_donor_city']['before'] = esc_html__ ( 'City: ', 'seamless-donations' ). "<span class='dgx-donate-comment'>". esc_html__ ('(required)')."</span>";

	return $array;
}

add_filter('seamless_donations_form_billing_section', 'modify_seamless_donations_get_billing_section');

*/