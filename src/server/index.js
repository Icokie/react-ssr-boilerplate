const path = require('path');
const express = require('express');
const config = require('../../config/dev');

const server = express();

// ==========================================================/
// babelify
// ==========================================================/

require('babel-register')({
    presets: config.babelPresets
});

const reactApp = require('../app/ssr/index');

// ==========================| babelify |====================/

// ==========================================================/
// server configuration
// ==========================================================/

server.set('view engine', 'pug');
server.set('views', path.resolve(__dirname));

// ==============| server configuration |====================/

const headers = {
    'x-timestamp': Date.now(),
    'x-sent': true
};

// ==========================================================/
// routing
// ==========================================================/

// disable favicon
server.get('/favicon.ico', (req, res) => {

    res.sendStatus(204);

});

const options = {
    root: path.resolve(__dirname, '../../build/static'),
    dotfiles: 'deny',
    headers
};

// serve static files
server.get('/static/:name', (req, res) => {

    res.sendFile(req.params.name, options, err => {

        if (err) {

            console.log(err);

        }

    });

});

// serve react view
server.get('*', (req, res) => {

    if (req.get('X-Requested-With') === 'XMLHttpRequest') {

        res.json({});

    } else {

        const template = `<html>
        <head>
        </head>
        <body>
        <div id="app">${reactApp.default}</div>
        </body>
        </html>`;

        res.send(template);

    }

});

// =====================| routing |==========================/

// ==========================================================/
// run
// ==========================================================/

server.listen(config.backendPort, console.log(`backend at : ${config.backendPort}`));

// ========================| run |===========================/
