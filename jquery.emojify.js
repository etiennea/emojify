(function ( $ ) {
    $.fn.emojify = function(options) {

        var settings = $.extend({
            // These are the defaults.
            url: "https://s3.amazonaws.com/voiceapp/assets/emoji/"
        }, options );

        function emoji_replacer(str, p1) {
            return decimalToHex(ord(p1.toString(16))).toString().toLowerCase().replace(
                /^([\da-f]+)$/i,
                    '<img src="'+settings.url+'$1.png" alt="emoji" class="emoji" style="width: 20px;vertical-align: text-bottom;"/>'
            );
        }

        function decimalToHex(d, padding) {
            var hex = Number(d).toString(16);
            padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

            while (hex.length < padding) {
                hex = "0" + hex;
            }

            return hex;
        }

        function ord(string) {
            // Returns the codepoint value of a character
            //
            // version: 1109.2015
            // discuss at: http://phpjs.org/functions/ord
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +   input by: incidence
            // *     example 1: ord('K');
            // *     returns 1: 75
            // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
            // *     returns 2: 65536
            var str = string + '',
                code = str.charCodeAt(0);
            if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
                var hi = code;
                if (str.length === 1) {
                    return code; // This is just a high surrogate with no following low surrogate, so we return its value;
                    // we could also throw an error as it is not a complete character, but someone may want to know
                }
                var low = str.charCodeAt(1);
                return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
                return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
                // we could also throw an error as it is not a complete character, but someone may want to know
            }
            return code;
        }

        var selector = this.selector.replace('.','');
        return this.each(function() {
            var stringInput = $(this).html();
            var replaceRegex = new RegExp(/([\u0080-\uFFFF]{1,1}[\u0080-\uFFFF])/g);
            $(this).html(stringInput.replace(replaceRegex, emoji_replacer)).removeClass(selector);
        })

    };
}( jQuery ));