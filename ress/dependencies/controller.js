var controller = {
    exports: [],
    name: ''
};

if(typeof controller.exports == "undefined") {

    console.log('This controller is undefined');

}else if(typeof controller.exports !== "undefined") {

    var exports = function (controller) {
        return controller.exports
    };

    exports(controller.exports);

}