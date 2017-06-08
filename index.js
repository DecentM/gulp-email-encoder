const gutil = require('gulp-util')
const through = require('through2')
const encoder = require('email-encoder')

module.exports = () => {
  return through.obj(function process (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-email-encoder', 'Streaming not supported'))
      return
    }

    try {
      file.contents = Buffer.from(encoder(file.contents.toString()))
      this.push(file)
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-email-encoder', err))
    }

    cb()
  })
}
