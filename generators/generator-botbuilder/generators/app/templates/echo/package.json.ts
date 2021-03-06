{
    "name": "<%= botName %>",
    "version": "1.0.0",
    "description": "<%= botDescription %>",
    "author": "Microsoft Bot Builder Yeoman Generator",
    "license": "MIT",
    "main": "<%= npmMain %>",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "tsc",
        "start": "tsc && node ./lib/index.js",
        "watch": "tsc && node ./lib/index.js"
      },
    "dependencies": {
        "botbuilder": "^4.0.5",
        "botframework-config": "^4.0.5",
        "dotenv": "^6.0.0",
        "restify": "^6.3.4"
    },
    "devDependencies": {
        "eslint": "^5.6.0",
        "eslint-config-standard": "^12.0.0",
        "eslint-plugin-import": "^2.14.0",
        "eslint-plugin-node": "^7.0.1",
        "eslint-plugin-promise": "^4.0.1",
        "eslint-plugin-standard": "^4.0.0",
        "nodemon": "^1.18.4",
        "@types/node": "10.10.2",
        "@types/restify": "7.2.4"
    }
}
