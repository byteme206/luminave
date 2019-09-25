import RgbParam from './param/RgbParam.js'
import RangeParam from 'fivetwelve/lib/param/RangeParam.js'
import HiResParam from './param/HiResParam.js'
import PanTiltParam from './param/PanTiltParam.js'

import DmxDevice from './DmxDevice.js'

export default class CameoMovoBeam100 extends DmxDevice {
  constructor(options) {
    super(Object.assign(options, {
      params: {
        panTilt: new PanTiltParam(
          new HiResParam([1, 2], { min: 0, max: 180 }), 
          new HiResParam([4, 5], { min: 0, max: 120 })
        ),

        panEndless: new RangeParam(3, {
          min: 0,
          max: 255
        }),
        tiltEndless: new RangeParam(6, {
          min: 0,
          max: 255
        }),

        dimmer: new RangeParam(7, {
          min: 0,
          max: 255
        }),
        strobe: new RangeParam(8, {
          min: 0,
          max: 255
        }),

        color: new RgbParam([9, 10, 11]),

        white: new RangeParam(12, {
          min: 0,
          max: 255
        })

        // 13: Device settings
        // 14: Color Ring Macro
        // 15: Color Ring Maacro Speed
      }
    }))

    this.channels = 15
    this.weight = 5.1
  }
}
