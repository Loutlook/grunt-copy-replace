# grunt-copy-replace

> Find certain test in a file and use it to replace target text in another file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-copy-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-copy-replace');
```

## The "copy_replace" task

### Overview
In your project's Gruntfile, add a section named `copy_replace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  copy_replace: {
    options: {
      // Task-specific options go here.
    },
    files: {
      // Speciify source and destination files.
      // Support only one source and one destination file now.
    },
  },
});
```

### Options

#### options.srcPattern
Type: `String`
Default value: null

A string value that is used to create regex object which is used to find certain text in source file.

#### options.destPattern
Type: `String`
Default value: null

A string value that is used to create regex object which is used to find target text in destination file.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1: first release, basic functions.
