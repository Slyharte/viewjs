var scope = {
    exports: [],
    name: undefined
};

if(typeof scope.exports == "undefined") {

    console.log('This scope is undefined');

}else if(typeof scope.exports !== "undefined") {

    console.warn('This scope is created');

    var exports = function (scope) {
        return scope
    };

    exports(scope.exports);

}

if(window.location.host + scope.name) {

    document.write(scope.exports);

    //console.warn(`${scope.name} is now used`);

}