(function(exports) {
    function YaEvent(data) {
        this.stopImmediatePropagation = function() {};
        this.get = function(key) {
            return data[key];
        };
    }
    function resetSpies() {
        var map = {
            geoObjects: {
                add: sinon.spy(),
                remove: sinon.spy()
            },
            events: {
                add: sinon.spy()
            },
            setCenter: sinon.spy()
        };
        exports.Map = sinon.stub().returns(map);
        exports.Placemark = sinon.spy();
    }
    beforeEach(resetSpies);

    exports.YaEvent = YaEvent;
    exports.ready = function(callback, scope) {
        setTimeout(function() {
            callback.call(scope);
        }, 1);
    };
})(window.ymaps = {});
