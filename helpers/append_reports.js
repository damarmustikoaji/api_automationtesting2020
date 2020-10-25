const supertest = require('supertest');
require('dotenv').config();
const api = supertest(process.env.JAMET_URL);

 function appendReports(data) {
      const stats = data.stats;
      startDate = stats.start.split('T');
      timeStart = startDate[1].split('.');
      endDate = stats.end.split('T');
      timeEnd = endDate[1].split('.');

      startDate = startDate[0] + ' ' + timeStart[0];
	  endDate = endDate[0] + ' ' + timeEnd[0];
	  const payload = {
        "name": project,
        "suites": stats.suites,
        "tests": stats.tests,
        "passes": stats.passes,
        "pending": stats.pending,
        "failures": stats.failures,
        "start": startDate,
        "end": endDate,
        "duration": stats.duration,
        "tests_registered": stats.testsRegistered,
        "pass_percent": stats.passPercent,
        "pending_percent": stats.pendingPercent,
        "other": stats.other,
        "has_other": stats.hasOther,
        "skipped": stats.skipped,
        "has_skipped": stats.hasSkipped,
        "created_at": endDate
}

	const postAppendReport = () =>
	api
		.post('/api/insert.php')
		.set('Content-Type', 'application/json')
		.send(payload);

	postAppendReport().then(response => {
	console.log(response.body.message);
	});
	}

let project;
for (let j = 0; j < process.argv.length; j++) {
    if(j = 2){
      project = process.argv[j];
	  const data = require(`../reports/${project}/mochawesome/mochawesome.json`);
	  appendReports(data);
      break;
    }
}
