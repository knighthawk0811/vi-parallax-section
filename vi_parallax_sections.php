<?php
/*
Plugin Name: VI: parallax Sections
Plugin URI: http://neathawk.com
Description: styling of parallax sections, can add through block/groups
Version: 0.1.200814
Author: Joseph Neathawk
Author URI: http://Neathawk.com
License: GNU General Public License v2 or later
*/

class vi_parallax_sections
{
    /*--------------------------------------------------------------
    >>> TABLE OF CONTENTS:
    ----------------------------------------------------------------
    # Instructions
    # TODO
    # Attributes
    # Constructive Functions
    # Reusable Functions
    # Shortcode Functions (are plugin territory)
    --------------------------------------------------------------*/


    /*--------------------------------------------------------------
    # TODO
    --------------------------------------------------------------*/

    //create a custom block with a background image and a toggle for bg/fg

    /*--------------------------------------------------------------
    # Attributes
    --------------------------------------------------------------*/
    private static $error_report = false;

    /*--------------------------------------------------------------
    # Constructive Functions
    --------------------------------------------------------------*/
	/**
	 * ENQUEUE SCRIPTS AND STYLES
	 *
	 * wp_enqueue_style( string $handle, string $src = '', array $deps = array(), string|bool|null $ver = false, string $media = 'all' )
	 * wp_enqueue_script( string $handle, string $src = '', array $deps = array(), string|bool|null $ver = false, bool $in_footer = false )
	 *
	 * @link https://developer.wordpress.org/themes/basics/including-css-javascript/#stylesheets
	 */
	public static function enqueue_scripts() {
	    //style for the plugin
	    wp_enqueue_style( 'vi-ps-css', plugins_url( '/style.css', __FILE__ ), NULL , NULL , 'all' );

	    wp_enqueue_script( 'vi-ps-js', plugins_url( '/common.js', __FILE__ ), array('jquery') , NULL , true );
	}


    /*--------------------------------------------------------------
    # Reusable Functions
    --------------------------------------------------------------*/



    /*--------------------------------------------------------------
    # Shortcode Functions (are plugin territory)
    --------------------------------------------------------------*/


}



//enqueue scripts
add_action( 'wp_enqueue_scripts', Array( 'vi_parallax_sections', 'enqueue_scripts' ) );
