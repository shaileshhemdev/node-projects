var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
            '@ds137283.mlab.com:37283/nodetodosample';
    }
}