require('../../less/birth.less')
require('../../less/common.less')
import Birthday from 'birth'
import * as consts from 'birthconst'
new Birthday(consts.str, consts.radio, consts.canvas, consts.width, consts.height, consts.size).init()

