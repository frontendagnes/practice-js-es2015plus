import Programmer from "./classes/Programmer";
import Junior from "./classes/Junior";
import Mid from "./classes/Mid";
import Senior from "./classes/Senior";

const features = {
  skills: 10,
  experience: 10,
  willingness: 10,
};

const task = {
  difficult: 2,
  size: 1,
};

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log("Programmer", time);

const junior = new Junior(features);
const timeJ = junior.getApproximateTimeTaskDoneInHours(task);
console.log("Junior", timeJ);

const mid = new Mid(features);
const timeM = mid.getApproximateTimeTaskDoneInHours(task);
console.log("Mid", timeM);

const senior = new Mid(features);
const timeS = senior.getApproximateTimeTaskDoneInHours(task);
console.log("Senior", timeS);
