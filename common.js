/**
 * common.js
 * loaded in the footer
 *
 * @link
 * @version 0.1.200814
 */
 "use strict";






/**
 * copy parallax image to background of the parent container
 *
 * @link
 * @version 0.1.200814
 * @since 0.1.200814
 */
jQuery(document).ready(function()
{
    jQuery(".wp-block-group.parallax-background").css('background-image', function(index){
        //create a unique identifier
        // stick a class name to this element
        const unique_id = 'vips-' + Date.now();
        jQuery(this).addClass('' + unique_id);
        //find the first background image
        //make it invisible
        //grab its src value
        var first_image = jQuery(this).find( '.background img' ).first();
        jQuery(first_image).css( "opacity", "0" ); 
        if(first_image)
        {
        	index = jQuery(first_image).attr( "src" );
        }
        //create a stylesheet
        var styleEl = document.createElement('style');
        // Append <style> element to <head>
        document.head.appendChild(styleEl);
        // Grab style element's sheet
        var styleSheet = styleEl.sheet;
        //set this::before background-image to the first_image.src
        styleSheet.insertRule('.' + unique_id + '::before { background-image:url(' + index + ') }', styleSheet.cssRules.length);

        //return  'url(' + index + ')';//old method was to set the bg for the parent element, we use ::before now
        return 'none';
    });
    jQuery(".wp-block-group.parallax-foreground").css('background-image', function(index){
        //create a unique identifier
        // stick a class name to this element
        const unique_id = 'vips-' + Date.now();
        jQuery(this).addClass('' + unique_id);
        //find the first background image
        //make it invisible
        //grab its src value
        var first_image = jQuery(this).find( '.background img' ).first();
        jQuery(first_image).css( "opacity", "0" ); 
        if(first_image)
        {
            index = jQuery(first_image).attr( "src" );
        }
        //create a stylesheet
        var styleEl = document.createElement('style');
        // Append <style> element to <head>
        document.head.appendChild(styleEl);
        // Grab style element's sheet
        var styleSheet = styleEl.sheet;
        //set this::before background-image to the first_image.src
        styleSheet.insertRule('.' + unique_id + '::before { background-image:url(' + index + ') }', styleSheet.cssRules.length);

        //return  'url(' + index + ')';//old method was to set the bg for the parent element, we use ::before now
        return 'none';
    });
});