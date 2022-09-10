require('dotenv').config();
const {mongoUser, mongoPass, clusterUri} = process.env;
const mongoURI = `mongodb+srv://${mongoUser}:${mongoPass}@${clusterUri}/test?retryWrites=true&w=majority`;
const jwtSecret = 'PSpMjkYokqeWgy18BkmChVS9q1qvgSmj';
module.exports = {
  mongoURI,
  jwtSecret
}
