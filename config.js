var config = {
  production: {
    serverAddress: "https://production.domain.com",
    port: 3005,
    awsConfig: {
      region: 'us-east-1',
      maxRetries: 3,
      accessKeyId: 'this is top secret',
      secretAccessKey: 'this is bottom secret',
      timeout: 15000
    }
},
default: {
  serverAddress: "https://test.domain.com",
  port: 3000,
  awsConfig: {
    region: 'us-east-1',
    maxRetries: 3,
    accessKeyId: 'this is top secret test',
    secretAccessKey: 'this is bottom secret test',
    timeout: 15000
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
