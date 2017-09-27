module.exports = {

    backendPort: 4000,

    apiProxy: {
        host: ''
    },

    cache: {
        back: {cache: true, expires: 30000},
        front: {cache: true, expires: 30000}
    },

    babelPresets: ['es2015', 'react']

};
