emojify
=======

A simple jquery plugin to make emoticons from iOS visible on the web. 
Please host your emoticons yourself.

Usage
-----
    <p class="contains-emoticons">I fking love hugs😍</p>
    
    <script>
    $(function()){
      $('.contains-emoticons').emojify({url: 'path/to/your/emoticons'});
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
