export default {
  'name': 'jsconf-budapest-2017',
  'global': {
    'fps': 60,
    'dimmer': 255,
    'color': [0, 255, 0],
    'useModV': true
  },
  'dmxInterface': {
    'universeAmount': 1,
    'driver': 'fivetwelve-driver-usbpro/es5',
    'serialport': { 'path': '/dev/cu.usbserial-EN193448' }
  },
  'server': {
    'port': 3000,
    'websocket': {
      'url': 'ws://localhost:',
      'path': {
        'midi': '/midi',
        'modV': '/modV'
      }
    }
  },
  'log': { 'separator': '-------------------------------' },
  'animations': [{
      'animationId': 'greenwall',
      'duration': 1,
      'name': 'This is DnB',
      'timeline': [{
        'name': 'color',
        'value': [0, 0, 0],
        'keyframes': [{
          'time': 0,
          'value': [0, 255, 0],
          'modV': true
          }, {
           'time': 1,
           'value': [0, 0, 0]
         }]
      }]
    }, {
      'animationId': 'whateverwall',
      'duration': 1,
      'name': 'This is DnB',
      'timeline': [{
          'name': 'color',
          'value': [0, 0, 0],
          'keyframes': [{
            'time': 0,
            'value': [255, 255, 255],
            'modV': false
          }, {
            'time': 0.75,
            'value': [255, 255, 255],
            'modV': false
          }, {
            'time': 1,
            'value': [0, 0, 0]
          }]
        }, {
          'name': 'uv',
          'value': 0,
          'keyframes': [{
            'time': 0,
            'value': 255,
            'modV': false
          }, {
            'time': 1,
            'value': 0
          }]
        }]
    }, {
      'animationId': 'yellow',
      'duration': 2,
      'name': 'yellow',
      'timeline': [{
        'name': 'color',
        'value': [0, 0, 0],
        'keyframes': [{
          'time': 0,
          'value': [255, 234, 0],
          'modV': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
      }]
    }, {
      'animationId': 'green',
      'duration': 2,
      'name': 'Single color',
      'timeline': [{
        'name': 'color',
        'value': [0, 0, 0],
        'keyframes': [{
          'time': 0,
          'value': [0, 255, 0],
          'modV': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
      }]
    }, {
      'animationId': 'blue',
      'duration': 2,
      'name': 'Single color',
      'timeline': [{
        'name': 'color',
        'value': [0, 0, 0],
        'keyframes': [{
          'time': 0,
          'value': [0, 0, 255],
          'modv': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
      }]
    }, {
      'animationId': 'purple',
      'duration': 2,
      'name': 'Single color',
      'timeline': [{
        'name': 'color',
        'value': [0, 0, 0],
        'keyframes': [{
          'time': 0,
          'value': [255, 0, 255],
          'modv': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
      }]
    }, {
      'animationId': 'allthelight',
      'duration': 3,
      'name': 'This is a funny animation',
      'timeline': [{
          'name': 'color',
          'value': [0, 0, 0],
          'keyframes': [{
          'time': 0,
          'value': [255, 0, 0],
          'modv': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
        }, {
          'name': 'strobe',
                    'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }]
    }, {
      'animationId': 'uvbaby',
      'duration': 2,
      'name': 'This is a funny animation',
      'timeline': [{
          'name': 'uv',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 255,
          'modv': false
        }, {
          'time': 0.5,
          'value': 255
        }, {
          'time': 1,
          'value': 0
        }]
        }, {
          'name': 'strobe',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }]
    }, {
      'animationId': 'clockwise',
      'duration': 4,
      'name': 'Starburst running clockwise',
      'timeline': [{
          'name': 'color',
          'value': [0, 0, 0],
          'keyframes': [{
          'time': 0,
          'value': [255, 0, 0],
          'modv': true
        }, {
          'time': 0.6,
          'value': [255, 0, 0],
          'modv': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
        }, {
          'name': 'uv',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 255,
          'modv': false
        }, {
          'time': 1,
          'value': 0
        }]
        }, {
          'name': 'rotate',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'clockwise(20)'
        }, {
          'time': 1,
          'value': 'stop'
        }]
        }, {
          'name': 'strobe',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }]
    }, {
      'animationId': 'counterClockwise',
      'duration': 4,
      'name': 'Starburst running counter-clockwise',
      'timeline': [{
          'name': 'color',
          'value': [0, 0, 0],
          'keyframes': [{
          'time': 0,
          'value': [255, 0, 255],
          'modv': true
        }, {
          'time': 0.6,
          'value': [255, 0, 255],
          'modv': true
        }, {
          'time': 1,
          'value': [0, 0, 0]
        }]
        }, {
          'name': 'uv',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 255,
          'modv': false
        }, {
          'time': 1,
          'value': 0
        }]
        }, {
          'name': 'rotate',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'counterClockwise(20)'
        }, {
          'time': 1,
          'value': 'stop'
        }]
        }, {
          'name': 'strobe',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }]
    }, {
      'animationId': 'fogfogfog',
      'duration': 8,
      'name': 'This is a funny animation',
      'timeline': [{
        'name': 'amount',
        'value': 0,
        'keyframes': [{
          'time': 0,
          'value': 255
        }, {
          'time': 0.8,
          'value': 255
        }, {
          'time': 1,
          'value': 0
        }]
      }]
    }, {
      'animationId': 'bubblebubblebubble',
      'duration': 8,
      'name': 'This is a funny animation',
      'timeline': [{
          'name': 'motor',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 0.8,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }, {
          'name': 'fan',
          'value': 0,
          'keyframes': [{
          'time': 0,
          'value': 'on'
        }, {
          'time': 0.8,
          'value': 'on'
        }, {
          'time': 1,
          'value': 'off'
        }]
        }]
    }],

  'scenes': [{
      'sceneId': 'left_1',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button1'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_1'],
        'animations': [{
          'start': 0,
          'animationId': 'yellow'
        }]
      }]
    }, {
      'sceneId': 'left_2',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button2'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_2'],
        'animations': [{
          'start': 0,
          'animationId': 'blue'
        }]
      }]
    }, {
      'sceneId': 'left_3',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button3'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['cameo_ledspot_1'],
        'animations': [{
          'start': 0,
          'animationId': 'purple'
        }]
      }]
    }, {
      'sceneId': 'right_1',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button6'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_1'],
        'animations': [{
          'start': 0,
          'animationId': 'blue'
        }]
      }]
    }, {
      'sceneId': 'right_2',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button5'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_4'],
        'animations': [{
          'start': 0,
          'animationId': 'purple'
        }]
      }]
    }, {
      'sceneId': 'right_3',
      'name': 'This is my awesome first scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button4'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['cameo_ledspot_2'],
        'animations': [{
          'start': 0,
          'animationId': 'yellow'
        }]
      }]
    }, {
      'sceneId': 'sphereClockwise',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button7'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['adj_planet'],
        'animations': [{
          'start': 0,
          'animationId': 'clockwise'
        }]
      }]
    }, {
      'sceneId': 'sphereCounterClockwise',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button8'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['adj_planet'],
        'animations': [{
          'start': 0,
          'animationId': 'counterClockwise'
        }]
      }]
    }, {
      'sceneId': 'greenwall',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button10'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['cameo_pixbar_1'],
        'animations': [{
          'start': 0,
          'animationId': 'greenwall'
        }]
      }]
    }, {
      'sceneId': 'whateverwall',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button11'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['cameo_pixbar_1'],
        'animations': [{
          'start': 0,
          'animationId': 'whateverwall'
        }]
      }]
    }, {
      'sceneId': 'whateverwall2',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button12'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['cameo_pixbar_1'],
        'animations': [{
          'start': 0,
          'animationId': 'whateverwall'
        }]
      }]
    }, {
      'sceneId': 'scene8',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button16'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fogmaschine'],
        'animations': [{
          'start': 0,
          'animationId': 'fogfogfog'
        }]
      }]
    }, {
      'sceneId': 'scene9',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button13'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_1',
          'fungeneration_ledspot_2'],
        'animations': [{
          'start': 0,
          'animationId': 'allthelight'
        }]
      }]
    }, {
      'sceneId': 'superuv',
      'name': 'This is my awesome second scene',
      'midi': {
        'controllerId': 'korgnanopad2',
        'partId': 'button14'
      },
      'layers': [{
        'layerId': 'layer1',
        'devices': ['fungeneration_ledspot_1',
          'fungeneration_ledspot_2',
          'fungeneration_ledspot_3',
          'fungeneration_ledspot_4',
          'cameo_ledspot_1',
          'cameo_ledspot_2',
          'cameo_pixbar_1',
          'adj_planet'],
        'animations': [{
          'start': 0,
          'animationId': 'uvbaby'
        }]
      }]
    }],
  'devices': {
    'dmx': [{
      'deviceId': 'stairville_bowl_1',
      'type': 'StairvilleBowlBeam604LEDCOBMovingHead',
      'name': 'Stairville Bowl Beam 604 LED COB MovingHead',
      'universe': 1,
      'address': 13
      }, {
        'deviceId': 'fungeneration_ledspot_1',
        'type': 'FunGenerationSeParQuadLedRgbUv',
        'name': 'Fun Generation SePar Quad LED RGB UV',
        'universe': 1,
        'address': 1
      }, {
        'deviceId': 'fungeneration_ledspot_2',
        'type': 'FunGenerationSeParQuadLedRgbUv',
        'name': 'Fun Generation SePar Quad LED RGB UV',
        'universe': 1,
        'address': 7
      },
       {
        'deviceId': 'fogmaschine',
        'type': 'StairvilleAF150',
        'name': 'Stairville AF-150',
        'universe': 1,
        'address': 46
      }],
    'midi': [{
      'name': 'nanoPAD2',
      'manufacturer': 'KORG INC.',
      'controllerId': 'korgnanopad2',
      'input': 'nanoPAD2 PAD',
      'output': 'nanoPAD2 CTRL',
      'layout': {
        'height': 2,
        'width': 9,
        'parts': [{
            'note': 37,
            'type': 'button',
            'y': 0,
            'x': 1,
            'partId': 'button1'
          }, {
            'note': 39,
            'type': 'button',
            'y': 0,
            'x': 2,
            'partId': 'button2'
          }, {
            'note': 41,
            'type': 'button',
            'y': 0,
            'x': 3,
            'partId': 'button3'
          }, {
            'note': 43,
            'type': 'button',
            'y': 0,
            'x': 4,
            'partId': 'button4'
          }, {
            'note': 45,
            'type': 'button',
            'y': 0,
            'x': 5,
            'partId': 'button5'
          }, {
            'note': 47,
            'type': 'button',
            'y': 0,
            'x': 6,
            'partId': 'button6'
          }, {
            'note': 49,
            'type': 'button',
            'y': 0,
            'x': 7,
            'partId': 'button7'
          }, {
            'note': 51,
            'type': 'button',
            'y': 0,
            'x': 8,
            'partId': 'button8'
          }, {
            'note': 36,
            'type': 'button',
            'y': 1,
            'x': 1,
            'partId': 'button9'
          }, {
            'note': 38,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button10'
          }, {
            'note': 40,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button11'
          }, {
            'note': 42,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button12'
          }, {
            'note': 44,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button13'
          }, {
            'note': 46,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button14'
          }, {
            'note': 48,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button15'
          }, {
            'note': 50,
            'type': 'button',
            'y': 1,
            'x': 2,
            'partId': 'button16'
          }]
      }
    }]
  }
}
