(function(exports) {
    function resetSpies() {
        var map = {
            geoObjects: {
                add: sinon.spy(),
                remove: sinon.spy()
            },
            events: {
                add: sinon.spy()
            }
        };
        exports.Map = sinon.stub().returns(map);
        exports.Placemark = sinon.spy();
    }
    beforeEach(resetSpies);
    exports.ready = function(callback, scope) {
        setTimeout(function() {
            callback.call(scope);
        }, 1);
    };
})(window.ymaps = {});
