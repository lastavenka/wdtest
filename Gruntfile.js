module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'build/css/style.css': ['source/sass/style.scss']
        }
      }
    },

    pug: {
      compile: {
        files: {
          'build/index.html': ['source/index.pug']
        }
      },
      options: {
        pretty: true
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 10']
      },
      style: {
        src: 'build/css/style.css'
      }
    },

    cmq: {
      style: {
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: 'gzip'
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ['source/sass/**/*.scss']
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            src: ['build/img/**/*.{png,jpg,gif,svg}']
          }
        ]
      }
    },

    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'source',
            src: ['img/*.*'],
            dest: 'build'
          }
        ]
      }
    },

    clean: {
      build: ['build']
    },

    cmq: {
      options: {
        log: false
      },
      target: {
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    uglify: {
      start: {
        files: {
          'build/js/script.min.js': ['source/js/*.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      scripts: {
        files: ['source/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },

      sass: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false
        }
      },

      pug: {
        files: ['source/index.pug'],
        tasks: ['pug'],
        options: {
          spawn: false,
          pretty: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'pug',
    'imagemin',
    'uglify',
    'csscomb',
    'sass',
    'autoprefixer',
    'cmq',
    'cssmin'
  ]);
  grunt.loadNpmTasks('grunt-contrib-watch');
};
