var s3 = require('s3');
var config = require('../lib/config');

module.exports = {
  push: function() {
    // create the client
    var s3params = {
      syncS3: 20,
      s3Options: {
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
        region: "eu-west-1"
      }
    };
    var client = s3.createClient(s3params);

    // create ALL the params
    var params = {
      localDir: './public/',
      s3Params: {
        Bucket: config.AWS_S3_STATIC_BUCKET,
        ACL: "public-read",
      }
    };
    // create the s3 object
    var uploader = client.uploadDir(params);

    // handle errors and give crude feedback
    uploader.on('error', function(err) {
      console.error('problem uploading: ' + err.stack);
    });
    uploader.on('end', function() {
      console.log('All done');
    });
  }
};
