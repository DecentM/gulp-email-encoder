# gulp-email-encoder [![Build Status](https://travis-ci.org/DecentM/gulp-email-encoder.svg?branch=master)](https://travis-ci.org/DecentM/gulp-email-encoder) [![Greenkeeper badge](https://badges.greenkeeper.io/DecentM/gulp-email-encoder.svg)](https://greenkeeper.io/)

> Protect e-mail addresses in your HTML from spambots


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
