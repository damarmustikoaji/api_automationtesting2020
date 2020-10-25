const supertest = require('supertest');

require('dotenv').config();
const api = supertest(process.env.FAKERESTAPI_URL);

const getActivities = () => api.get('/api/Activities')
	.set('Accept', 'application/json');

const getActivitiesId = (id) => api.get(`/api/Activities/${id}`)
	.set('Accept', 'application/json');

module.exports = {
	getActivities,
	getActivitiesId
};