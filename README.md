SerializeRailsForm
==================
This will serialize a rails form into a nested hash for use with
something like Backbone.

Examples:
    
    #Given you have a Rails form for a Post that has a subject and body
    
    $('form').serializeRailsForm()
    
    # Results in:
    #  { post: {
    #      subject: 'Gangsterize On.', 
    #      body: 'Seriously dudes, check it: http://cl.ly/ssi'
    #    }
    #  }

Returns a nested hash representation of your rails form.

Based on serializeObject (http://benalman.com/projects/jquery-misc-plugins/)

