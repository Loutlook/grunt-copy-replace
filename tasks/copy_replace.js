/*
 * grunt-copy-replace
 * https://github.com/Loutlook/grunt-copy-replace
 *
 * Copyright (c) 2017 Loutlook
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('copy_replace', 'Find certain test in a file and use it to replace target text in another file', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      srcPattern: null,
      destPattern: null
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Find the source text.
        return grunt.file.read(filepath).match(new RegExp(options.srcPattern, "g"));
      }).join();

      // Write the src text to target text in destination file.
      grunt.file.write(f.dest, grunt.file.read(f.dest).replace(new RegExp(options.destPattern, "g"), src));

      // Print a success message.
      grunt.log.writeln('Target text in "' + f.dest + '" has been overwrittern.');
    });
  });

};
