const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const project = require(`../../data/project.json`);
const code = require('../../../helpers/response_status.json');
const data = require('../../data/data_activities.json');
const schema = require('../../data/schema/api/get_activities_id_schema.json');

const { getActivitiesId } = require('../../page/api/Activities')

const method = 'GET';
const path = '/api/Activities/{id}';

const testCase = {
	describe: `@get @getActivitiesByIdTest ${project.name} | ${method} | ${path}`,
	before: 'pre-condition',
	after: 'post-condition',
	describePositive: '@positive | Positive Testing',
	positive: {
		getActivitiesId: '@getActivitiesId | Should be able to successfully request GET activities by id using valid data'
	}
};

describe(`${testCase.describe}`, () => {
	before(`${testCase.before}`, async() => {
		//test
	});
	after(`${testCase.after}`, async() => {
		//test
	});  
	describe(`${testCase.describePositive}`, () => {
		it(`${testCase.positive.getActivitiesId} | ${code.successOk.codeNumber}`, async() => {
			const response = await getActivitiesId(data.id);
			assert(response.status).to.equal(code.successOk.codeNumber, response.body.message);
			assert(response.body).to.be.jsonSchema(schema);
		});
	}); 
}); 
