const { log } = require('./logger.js');
const {
  getProjectDetails,
  getShippingMethods,
  getShippingMethodById,
  getTaxCategoryByKey,
} = require('./handson/project.js');

// TODO 1: Complete the functions in
// ./handson/client.js

// TODO : GET project details
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project
getProjectDetails().then(log).catch(log);

// TODO : GET ShippingMethod by ID

getShippingMethods()
  .then(res => {
    getShippingMethodById(res.body.results[0]?.id).then(log).catch(log);
  })
  .catch(log);

// TODO : GET Tax Category by key

getTaxCategoryByKey('standard-tax').then(log).catch(log);
