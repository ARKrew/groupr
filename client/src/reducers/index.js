import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import landingReducer from './landingReducer';
import quizReducer from './quizReducer';
import eventReducer from './eventReducer';
import companyReducer from './companyReducer';
import totpReducer from './totpReducer';
import otpReducer from './otpReducer';

export default combineReducers({
  auth: authReducer,
  landing: landingReducer,
  quiz: quizReducer,
  event: eventReducer,
  form: formReducer,
  company: companyReducer,
  // auth: authReducer,
  totp: totpReducer,
  otp: otpReducer
});
