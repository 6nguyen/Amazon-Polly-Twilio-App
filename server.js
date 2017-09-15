"use strict";

var express = require('express');
var AWS = require('aws-sdk');
var awsConfig = require('aws-config');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

// Load the config files
var config = require('./config.js').get(process.env.NODE_ENV);
AWS.config = awsConfig({
  region: config.awsConfig.region,
  maxRetries: config.awsConfig.maxRetries,
  accessKeyId: config.awsConfig.accessKeyId,
  secretAccessKey: config.awsConfig.secretAccessKey,
  timeout: config.awsConfig.timeout
});

// Create a new AWS Polly object
var polly = new AWS.Polly();

var express = require('express')
var app = express()
