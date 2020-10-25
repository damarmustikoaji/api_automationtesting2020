const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const project = require(`../../data/project.json`);
const code = require('../../../helpers/response_status.json');
const schema = require('../../data/schema/api/get_activities_schema.json');

const { getActivities } = require('../../page/api/Activities')

const method = 'GET';
const path = '/api/Activities';

const testCase = {
	describe: `@get @getActivitiesTest ${project.name} | ${method} | ${path}`,
	before: 'pre-condition',
	after: 'post-condition',
	describePositive: '@positive | Positive Testing',
	positive: {
		getActivities: '@getActivities | Should be able to successfully request GET activities using valid data'
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
		it(`${testCase.positive.getActivities} | ${code.successOk.codeNumber}`, async() => {
			const response = await getActivities();
			assert(response.status).to.equal(code.successOk.codeNumber, response.body.message);
			assert(response.body).to.be.jsonSchema(schema);
		});
	}); 
}); 
