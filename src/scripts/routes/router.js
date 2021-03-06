define([
    'backbone',
    'marionette'
], function(Backbone, Marionette) {

    var Router = Backbone.Marionette.AppRouter.extend({

        /**
         * routes handler - call function from routes handler.
         */
        appRoutes: {
            "": "home",
            "movies/:id": "showMovie",
            "profile": "profile",
            "profile/edit": "editProfile"
        }
    });

    return Router;
});