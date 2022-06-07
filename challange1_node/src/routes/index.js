var healthCheckRoutes = require('./healthCheck.js')
var dataSetGenerator = require('./dataSetGenerator');

module.exports = (app) => {
    app.use('/', healthCheckRoutes);
    app.use('/data', dataSetGenerator)
};;
