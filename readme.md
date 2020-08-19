# === VI: Parallax Sections ===
Contributors: Knighthawk<br>
Tags: parallax, groups, block editor<br>
Requires at least: 4.0<br>
Requires PHP: 5.2.4<br>
Tested up to: 5.4<br>
Version: 0.4.200706<br>
Stable tag: trunk<br>
License: GPLv2<br>
License URI: http://www.gnu.org/licenses/gpl-2.0.html<br>

Shortcodes allowing you to display posts inside other posts/pages

## == Description ==

VI: Parallax Sections - style and code needed to add parallax sections to "any" page or post.
Some themes won't look right, mostly if there is some margin or padding around the content area.

## == Coming Soon ==

custom blocks.<br>
Settings page with instructions and future settable options<br>


## == Instructions ==

use groups:

group class=parallax-background
    {
        group class=parallax-image
        group class=parallax-content
    }


group class=parallax-foreground
    {
        group class=parallax-image
        group class=parallax-content
    }

The background and foreground parallax containers wil be visibly different (background or foreground).
And the foreground may look best with only a background color, instead of an image.
The first img found in a parallax-image group will be set as teh full background image.
Any other img found there will be hidden.



## == Changelog ==

*0.1.200814*
* FPL
