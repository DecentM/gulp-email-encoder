# gulp-email-encoder [![Build Status](https://travis-ci.org/DecentM/gulp-email-encoder.svg?branch=master)](https://travis-ci.org/DecentM/gulp-email-encoder)

> Gulp wrapper for email-encoder


## Install

```
$ npm install --save-dev gulp-email-encoder
```


## Usage

```js
const gulp = require('gulp');
const emailEncoder = require('gulp-email-encoder');

gulp.task('default', () => {
	gulp.src('src/index.html')
		.pipe(emailEncoder())
		.pipe(gulp.dest('build'))
);
```

## API

### emailEncoder()

Replaces email addresses in the stream with their HTML entity-encoded counterparts

## License

MIT © [DecentM](http://decentm.com)
