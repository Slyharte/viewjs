var module = {
    exports: [],
    name: undefined
};

if(typeof module.exports == "undefined") {

    console.log('This module is undefined');

}else if(typeof module.exports !== "undefined") {

    var exports = function (module) {
        return module.exports
    };

    exports(module.exports);

}