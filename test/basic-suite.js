describe('basic yandex-map', function() {
  beforeEach(function(done) {
    this.map = document.createElement('yandex-map');
    setTimeout(function () {
      done();
    }, 1);
  });
  it('should initialize map', function() {
    expect(ymaps.Map.calledOnce).to.equal(true);
  });

  it('should subscribe to boundschange event', function() {
    expect(this.map.map.events.add.calledWith('boundschange', sinon.match.func)).to.equal(true);
    expect(this.map.map.events.add.calledOnce).to.equal(true);
  });

  it("should reflect bounds changes into properties", function (done) {
    var map = this.map;
    var args = map.map.events.add.firstCall.args;
    var handler = args[1];
    handler.call(args[2], new ymaps.YaEvent({newCenter: [55, 34], newZoom: 9}));
    setTimeout(function() {
      expect(map).to.have.property('latitude', 55);
      expect(map).to.have.property('longitude', 34);
      expect(map).to.have.property('zoom', 9);
      done();
    }, 1);
  });

  it("should update map center after attribute changes", function () {
    this.map.latitude = 80;
    this.map.longitude = 33;
    expect(this.map.map.setCenter.called).to.equal(true);
  });
});
