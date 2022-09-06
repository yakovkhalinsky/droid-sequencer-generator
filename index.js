const { getTemplates } = require('./src/templates')
const patch = require('./src/patch')

const {
  DROID_INI,
  CHANNELS,
  CHANNEL_BUTTON_START,
  UNMUTE_BUTTON_START,
  MUTE_BUTTON_START,
} = require('./droid.config')

const templates = getTemplates()

const output = patch.generate({
  CHANNELS,
  CHANNEL_BUTTON_START,
  UNMUTE_BUTTON_START,
  MUTE_BUTTON_START,
  templates,
})

patch.save({ DROID_INI, output })

