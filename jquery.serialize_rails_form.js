/*!
 * JQuery serializeRailsForm - v0.0 - 11/3/2011
 * http://github.com/ubermajestix/jquery_serialize_rails_form
 * 
 * Copyright (c) 2011 Tyler Montgomery
 * Licensed under the DoWhatYouWantWithIt™ license.
 */

// Based on serializeObject (http://benalman.com/projects/jquery-misc-plugins/)
// This will serialize a rails form into a nested hash.
//
// Examples:
//   # Given you have a Rails form for a Post that has a subject and body
//   $('form').serializeRailsForm()
//   # Results in:
//   #  { post: {
//   #      subject: 'Gangsterize On.', 
//   #      body: 'Seriously dudes, check it: http://cl.ly/ssi'
//   #    }
//   #  }
// 
// Returns a nested hash representation of your rails form.
(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.

  $.fn.serializeRailsForm = function(){
    var attrs = {};

    $.each( this.serializeArray(), function(i,o){
      var attribute, match, object, _name;
      var key   = o.name,
          value = o.value;
      match = key.match(/(.+)\[(.+)\]/);
      if (match) {
        object = match[1];
        attribute = match[2];
        attrs[_name = match[1]] || (attrs[_name] = {});
        return attrs[match[1]][match[2]] = value;
      }
    });
    return attrs;
  };
})(jQuery);
