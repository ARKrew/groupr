const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');

module.exports = (app) => {
	app.use('/api/auth', authRoutes);
	app.use('/api/current_event', eventRoutes);
};