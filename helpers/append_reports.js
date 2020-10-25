let project;
for (let j = 0; j < process.argv.length; j++) {
    if(j = 2){
      project = process.argv[j];
      const data = require(`../reports/${project}/mochawesome/mochawesome.json`);
      appendReports(data);
      break;
    }
}

    function appendReports(data) {
      const { execQueryReport } = require('./seed/execute_sql');
      const stats = data.stats;
      startDate = stats.start.split('T');
      timeStart = startDate[1].split('.');
      endDate = stats.end.split('T');
      timeEnd = endDate[1].split('.');

      startDate = startDate[0] + ' ' + timeStart[0];
      endDate = endDate[0] + ' ' + timeEnd[0];

      const sql = `INSERT INTO mochawesome (name, suites, tests, passes, pending, failures, start, end, duration, testsRegistered, passPercent, pendingPercent, other, hasOther, skipped, hasSkipped, created_at) VALUES ("${project}", ${stats.suites}, ${stats.tests}, ${stats.passes}, ${stats.pending}, ${stats.failures}, "${startDate}", "${endDate}", ${stats.duration}, ${stats.testsRegistered}, ${stats.pendingPercent}, ${stats.pendingPercent}, ${stats.other}, "${stats.hasOther}", ${stats.skipped}, "${stats.hasSkipped}", "${startDate}");`;
      execQueryReport(sql);
    }