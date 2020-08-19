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
        jQuery(this).find( '.background img' ).first().css( "opacity", "0" );
        
        var first_image = jQuery(this).find( '.background img' ).first();

        if(first_image)
        {
        	index = jQuery(first_image).attr( "src" );
        }
        return  'url(' + index + ')';
    });
    jQuery(".wp-block-group.parallax-foreground").css('background-image', function(index){
        jQuery(this).find( '.background img' ).first().css( "opacity", "0" );

        var first_image = jQuery(this).find( '.background img' ).first();

        if(first_image)
        {
        	index = jQuery(first_image).attr( "src" );
        }
        return  'url(' + index + ')';
    });
});