module.exports = {

    backendPort: 8080,

    apiProxy: {
        host: ''
    },

    cache: {
        back: {cache: true, expires: 30000},
        front: {cache: true, expires: 30000}
    }

};
