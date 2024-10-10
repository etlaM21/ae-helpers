let BPM = /* YOUR BPM HERE */;

let bps = BPM / 60;
let beatTime = 1 / bps;
time % beatTime * bps;