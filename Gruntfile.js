/*
 * grunt-batch-git-clone
 * https://github.com/elliot-a/grunt-git-batch-clone
 *
 * Copyright (c) 2014 Elliot Agro
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp', 'clones-standard'],
    },

    // Configuration to be run (and then tested).
    batch_git_clone: {
      standard: {
        options: {
          configFile: 'config-standard.json',
        },
      },
      withDeps: {
        options: {
          configFile: 'config-with-dependencies.json',
          bowerInstall: true,
          npmInstall: true,
          overWrite: true,
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },
  })

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks')

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'batch_git_clone', 'nodeunit'])

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test'])
}
