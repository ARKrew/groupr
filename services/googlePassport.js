const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("user");
const { serialize, deserialize } = require("./utils/serialize");
const googleService = require('./utils/serviceHandler');

passport.serializeUser(serialize);

passport.deserializeUser(deserialize);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			profileFields: ['id', 'name', 'displayName', 'emails', 'image', 'url'],
      proxy: true
		},
		googleService.serviceHandler
  )
);
