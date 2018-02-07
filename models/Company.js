const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');
const eventSchema = require('./Events')

const companySchema = new Schema({
	companyId: String,
	name: String,
	industry: String,
  website: String,
  jobsOpen: Array,
  primaryContact: String,
  imgLogoURL: String,
	employees: [
		{
			type: Schema.Types.ObjectId,
      ref: "user"
		}
	],
  activeEvents: [
		{
			type: Schema.Types.ObjectId,
      ref: "event"
		}
	],
  pastEvents: [
		{
			type: Schema.Types.ObjectId,
      ref: "event"
		}
	],
});

const Company = mongoose.model('companies', companySchema);

module.exports = Company;
