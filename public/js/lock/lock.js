import Lock from '../../module/lock/lock'
new Lock('lock', [{
  x:20,
  y:20,
  should: [{
    from: 2,
    addcheck: 1
  },
    {
      from: 6,
      addcheck: 3
    }, {
      from: 8,
      addcheck: 4
    }],
  state: false
}, {
  x:100,
  y:20,
  should: [
    {
      from: 7,
      addcheck: 4
    }
  ],
  state: false
}, {
  x:180,
  y:20,
  should: [{
    from: 0,
    addcheck: 1
  }, {
    from: 6,
    addcheck: 4
  }, {
    from: 8,
    addcheck: 5
  }],
  state: false
},{
  x:20,
  y:100,
  should: [{
    from: 5,
    addcheck: 4
  }],
  state: false
}, {
  x:100,
  y:100,
  state: false
}, {
  x:180,
  y:100,
  should: [{
    from: 3,
    addcheck: 4
  }],
  state: false
}, {
  x:20,
  y:180,
  should: [{
    from: 0,
    addcheck: 3
  }, {
    from: 8,
    addcheck: 7
  }, {
    from: 2,
    addcheck: 4
  }],
  state: false
}, {
  x:100,
  y:180,
  should: [
    {
      from: 1,
      addcheck: 4
    }
  ],
  state: false
},{
  x:180,
  y:180,
  should: [{
    from: 0,
    addcheck: 4
  },
    {
      from: 2,
      addcheck: 5
    },{
      from: 6,
      addcheck: 7
    }],
  state: false
}])