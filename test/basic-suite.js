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

  it("should reflect bounds changes into properties", function () {
    var args = this.map.map.events.add.firstCall.args;
    var handler = args[1];
    handler.call(args[2], new ymaps.YaEvent({newCenter: [55, 34], newZoom: 9}));
    expect(this.map).to.have.property('latitude', 55);
    expect(this.map).to.have.property('longitude', 34);
    expect(this.map).to.have.property('zoom', 9);
  });

  it("should update map center after attribute changes", function (done) {
    this.map.latitude = 80;
    this.map.longitude = 33;
    setTimeout(function () {
      expect(this.map.map.setCenter.calledOnce).to.equal(true);
      done();
    }.bind(this));
  });
});
