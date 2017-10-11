module.exports = function (bucketName, s3Key, callback) {  //fetch specified file from S3 and read it into a variable passed back via a callback

    var AWS = require('aws-sdk');
    var s3 = new AWS.S3();
    
    var params = {Bucket: bucketName, Key: s3Key};
    
    s3.getObject (params,function(err, data){
        if (err)   {
            console.log ("Unable to retrieve file from S3 with error: " + err);
            callback(err);
        } else {
            console.log (s3Key + " retrieved from " + bucketName);
            callback(null,data);
        }
    });
};

