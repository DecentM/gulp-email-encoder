# gulp-email-encoder [![Build Status](https://travis-ci.org/DecentM/gulp-email-encoder.svg?branch=master)](https://travis-ci.org/DecentM/gulp-email-encoder)

> My ace gulp plugin


## Install

```
$ npm install --save-dev gulp-email-encoder
```


## Usage

```js
const gulp = require('gulp');
const emailEncoder = require('gulp-email-encoder');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(emailEncoder())
		.pipe(gulp.dest('dist'))
);
```


## API

### emailEncoder([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [DecentM](http://decentm.com)
