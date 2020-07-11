const schedule = require("node-schedule");
const tarefa1 = schedule.scheduleJob("*/2 * 19 * * 0", function () {
  console.log("executando", new Date().getSeconds());
});
