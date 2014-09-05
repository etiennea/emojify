emojify
=======

A simple jquery plugin to make emoticons from iOS visible on the web, by replacing unicode characters with images. Currently supports 822 emoticons. Pull requests welcome.

Please host your emoticons yourself.

Usage
-----
    <p class="emojify">I fking love hugs😍</p>
    
    <script>
    $(function()){
      $('.emojify').emojify({url: 'path/to/your/emoticons'});
    })
    </script>
    
Requirements
------------
jQuery

Notes
-----
Emoji's get the emoji css class added. Here is an example css.

    <style>
        .emoji {
            width: 20px;
            vertical-align: text-bottom;
        }
    </style>

Selector must be a css class
