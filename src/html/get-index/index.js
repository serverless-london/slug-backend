var arc = require('@architect/functions')
var S3File = require('_getS3.js')
var fs = require('fs')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))

  var respData="";

  S3File ('slug-production-templates', 'config.json', (configErr,configData)=> {
  	if (configErr) {
  		respData="404"
  	} else {
  		S3File('slug-production-templates', 'index.js',(templateErr,templateFile) => {
  			if (templateErr) {
  				respData="404"
  			} else {
  				fs.writeFile("/tmp/index.js", templateFile, (err) => {
				    if(err) {
				        return console.log(err);
				    } else {
						var appTemplate = require('/tmp/index.js');
						var respData = appTemplate(configData);
				    }
				});
  			}
  		}
  	}
  };

  res({html:respData})
}

exports.handler = arc.html.get(route)
