module.exports = {

    backendPort: 4000,
    environment: process.env.NODE_ENV,

    apiProxy: {
        host: ''
    },

    cache: {
        back: {cache: true, expires: 30000},
        front: {cache: true, expires: 30000}
    },

    babelPresets: ['es2015', 'react'] 

};
