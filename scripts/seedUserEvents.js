const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

(async () => {
	const User = await db.User.findOne({ _id: "5a7a3db0601d0d64d113c16b" });
	User.events = [];
	
	try {
		await User.save();
		console.log('user save successful!');
	} catch(err) {
		console.log(err);
		process.exit(1);
	}

	const inactiveEvent = await db.Event.find({ active: false });
	const activeEvent = await db.Event.findOne({ active: true });
	const allEvents = [...inactiveEvent, activeEvent];

	User.events = allEvents.map(event => event._id);

	try {
		await User.save();
		console.log('successfully added events');
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
})();