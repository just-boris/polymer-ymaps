describe('basic yandex-map', function() {
  beforeEach(function(done) {
    this.map = document.createElement('yandex-map');
    setTimeout(function () {
      done();
    }, 1);
  });
  it('should initialize map', function() {
    expect(ymaps.Map.calledOnce).to.be.true;
  });

  it('should subscribe to boundschange event', function() {
    expect(this.map.map.events.add.calledWith('boundschange')).to.be.true;
    expect(this.map.map.events.add.calledOnce).to.be.true;
  });
});
