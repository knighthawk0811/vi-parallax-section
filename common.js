/**
 * common.js
 * loaded in the footer
 *
 * @link
 * @version 0.5.210127
 */
 "use strict";






/**
 * copy parallax image to background of the parent container
 *
 * @link
 * @version 0.5.210127
 * @since 0.1.200814
 */
jQuery(document).ready(function()
{
    //create a stylesheet
    var styleEl = document.createElement('style');
    // Append <style> element to <head>
    document.head.appendChild(styleEl);
    // Grab style element's sheet
    var styleSheet = styleEl.sheet;

    jQuery(".wp-block-group.parallax-background, .wp-block-group.parallax-foreground").css('background-image', function(index){

        //create a unique identifier
        // stick a class name to this element
        const unique_id = 'vips-' + Date.now();
        jQuery(this).addClass('' + unique_id);
        //find the first background image
        //make it invisible
        //grab its src value
        var first_image = jQuery(this).find( '.background img:not(.p-omit, .alignright, .alignleft, .p-omit img, .alignright img, .alignleft img)' ).first();

        //first() will return a length of 0 if not found
        //grab the next available image
        if(first_image.length == 0)
        {
            first_image = jQuery(this).find( 'img:not(.p-omit, .alignright, .alignleft, .p-omit img, .alignright img, .alignleft img)' ).first();

        }
        if(first_image)
        {
            //jQuery(first_image).css( "opacity", "0" );

        	index = jQuery(first_image).attr( "src" );

            if(index)
            {
                //set this::before background-image to the first_image.src
                styleSheet.insertRule('.' + unique_id + '::before { background-image:url(' + index + ') }', styleSheet.cssRules.length);                
            }
        }

        //return  'url(' + index + ')';//old method was to set the bg for the parent element, we use ::before now
        return 'none';
    });
});

