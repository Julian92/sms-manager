$(document).ready(function(){
    main();
});

/**
 * class controller main app
 */
var classController = function(){
    
};
classController.prototype = {
    
    loadNavBar: function(){
        var source   = $("#navbar-template").html();
        var template = Handlebars.compile(source);
        var context = {name: "Luis P."};
        var htmlSrt    = template(context);
        $('#navBarApp').html(htmlSrt);
    },
    
    getListMessages: function(){
        var smsAPI = "http://68.233.227.228/myapps/smsServices/public/sms/getList?jsoncallback=?";
        $.getJSON(smsAPI, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        }).done(function(data) {
            console.log(data);
        });
    },
    
    main: function(){
        this.loadNavBar();
        this.getListMessages();
    }
};

var instanceController = null;
function main(){
    instanceController = new classController();
    instanceController.main();
}

