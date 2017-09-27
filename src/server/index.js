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
server.set('views', path.resolve(__dirname, './views'));

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
server.get('/static/:name', (req, res, next) => {

    res.sendFile(req.params.name, options, err => {

        if (err) {

            next(err);

        }

    });

});

// serve react view
server.get('*', (req, res) => {

    if (req.get('X-Requested-With') === 'XMLHttpRequest') {

        res.json({});

    } else {

        res.render('index', {meta: {title: 'app', content: reactApp.default}});

    }

});

// =====================| routing |==========================/

// ==========================================================/
// run
// ==========================================================/

server.listen(config.backendPort, console.log(`backend at : ${config.backendPort}`));

// ========================| run |===========================/
