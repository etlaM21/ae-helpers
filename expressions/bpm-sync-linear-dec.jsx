var BPM = /* YOUR BPM HERE */;

var bps = BPM / 60;
var beatTime = 1 / bps;
Math.abs((time % beatTime * bps) - 1);