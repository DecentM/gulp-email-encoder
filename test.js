import path from 'path'
import test from 'ava'
import gulpUtil from 'gulp-util'
import gulpEncoder from '.'

test.cb('runs input through email-encoder', (t) => {
  const stream = gulpEncoder()

  stream.once('data', (file) => {
    t.is(file.contents.toString(), '<span>&#x6D;&#x79;&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</span>')
    t.end()
  })

  stream.write(new gulpUtil.File({
    'base':     __dirname,
    'path':     path.join(__dirname, 'file.ext'),
    'contents': Buffer.from('<span>myemail@email.com</span>')
  }))

  stream.end()
})
