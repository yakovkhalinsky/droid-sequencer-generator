const path = require('path')
const { readFileSync } = require('fs')

const CWD = process.cwd()

const TEMPLATES_MAP = {
  header: 'header.tpl',
  config: 'config.tpl',
  algoquencerMain: 'algoquencer/main.tpl',
  algoquencerExtra: 'algoquencer/extra.tpl',
  motoquencer: 'motoquencer.tpl',
  channelsHeader: 'channels/header.tpl',
  channelsFooter: 'channels/footer.tpl',
  channelsItem: 'channels/item.tpl',
}

exports.getTemplates = () => {
  console.log('>> Loading templates')
  const templates = {}
  Object.entries(TEMPLATES_MAP).map(([ name, file ]) => {
    const templateFilePath = path.resolve(CWD, 'templates', file)
    templates[name] = readFileSync(templateFilePath).toString()
  })
  return templates
}