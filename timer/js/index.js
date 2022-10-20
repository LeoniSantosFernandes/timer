// default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    btnPlay,
    btnPause,
    btnSet,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay,
    btnStop
} from "./elements.js"

import { ApplyEvents } from "./events.js"

const controls = Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
})

const timer = Timer({
    minutesDisplay,
    minutes:0, 
    secondsDisplay, 
    resetControls: controls.reset
})

const sound = Sound()

ApplyEvents({
    controls,
    sound,
    timer
})