var gulp = require('gulp');
var browserSync = require('browser-sync');

var tasksPath = './../../zuu-foundation/default/gulp-tasks/';
var gulpSetup = require(tasksPath + 'setup')(gulp,browserSync);

gulpSetup();
