const gulp = require('gulp');
const env = require('gulp-env');
const awspublish = require('gulp-awspublish');
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish');
const parallelize = require('concurrent-transform');

env('.keys.js');

const config = {
  // Required
  params: { Bucket: process.env.VUE_AWS_BUCKET },
  accessKeyId: process.env.VUE_AWS_KEY,
  secretAccessKey: process.env.VUE_AWS_SECRET,

  // Optional
  deleteOldVersions: true,
  distribution: process.env.VUE_AWS_DISTRIBUTION,
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    'Cache-Control': 'max-age=8640000'
  },

  // Sensible Defaults - gitignore these Files and Dirs
  distDir: 'dist',
  indexRootPath: true,
  cacheFileName: '.awspublish',
  concurrentUploads: 10,
  wait: false // wait for Cloudfront invalidation to complete
};

gulp.task('deploy', function() {
  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create(config, config);

  var g = gulp.src('./' + config.distDir + '/**');
  // publisher will add Content-Length, Content-Type and headers specified above
  // If not specified it will set x-amz-acl to public-read by default
  g = g.pipe(parallelize(publisher.publish(config.headers), config.concurrentUploads));

  // Invalidate CDN
  if (config.distribution) {
    console.log('Configured with Cloudfront distribution');
    g = g.pipe(cloudfront(config));
  } else {
    console.log('No Cloudfront distribution configured - skipping CDN invalidation');
  }

  // Delete removed files
  if (config.deleteOldVersions) g = g.pipe(publisher.sync());
  // create a cache file to speed up consecutive uploads
  g = g.pipe(publisher.cache());
  // print upload updates to console
  g = g.pipe(awspublish.reporter());
  return g;
});
