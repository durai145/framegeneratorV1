define([
    './HtmlSelect'
    ,'./HtmlLabel'
    ,'./HtmlText'
    , 'exports'
], function (HtmlSelect, HtmlLabel, HtmlText, exports) {
    'use strict';
    exports.mapper = {
        "LIST": HtmlSelect,
        "LABEL": HtmlLabel,
        "TEXT": HtmlText
    };
});