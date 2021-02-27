# === VI: Parallax Sections ===
Contributors: Knighthawk<br>
Tags: parallax, groups, block editor<br>
Requires at least: 4.0<br>
Requires PHP: 7.1<br>
Tested up to: 5.4<br>
Version: 0.6.210226<br>
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

Use a WP group block and wrap this around whatever content you choose to include in the parallax section.

The plugin will automatically select the first image inside the group as the background image.

If you want to omit the first image and use a different one, add a custom class backgorund to the chosen image and if needed you can add the custom class p-omit to any image you want not to be the background image.

The background and foreground parallax containers wil be visibly different (background or foreground).
Foreground sections DO NOT parallax, only background sections do.
And the foreground may look best with only a background color, instead of an image.

If you align the image left or right through WP it will still be added to the background, but will be pushed either left or right respectively.



## == Changelog ==

*0.6.210226*
* JS update, used jquery multi selector instead of duplicating a funciton for multiple things

*0.5.210127*
* JS update, used jquery multi selector instead of duplicating a funciton for multiple things

*0.1.200814*
* FPL
