import { files } from "./data.js";

// unit - jednostka B KB MB GB
// size - wielkość jednostki np 1024MB
const convertSize = (unit, size) => {
  let value = 0;
  switch (unit) {
    case (unit = "B"):
      value = size;
      break;
    case (unit = "KB"):
      // 1KB = 1024B
      value = size * 1024.0;
      break;
    case (unit = "MB"):
      // 1MB = 1048576B
      value = size * 1048576;
      break;
    case (unit = "GB"):
      // 1GB = 1073741824B
      value = size * 1073741824;
      break;
    default:
      value = "Sorry nie ma takiej wartości";
  }

  return value;
};

const convertBtoGB = (byte) => {
  const gBytes = byte / 1073741824;
  return gBytes.toFixed(2);
};

const getSum = (arr) => {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const getSize = () => {
  let sizes = [];

  files.forEach((field) => {
    const {
      size: { length: value = 0, unit = "B" },
    } = field;

    let result = convertSize(unit, value);
    sizes.push(parseInt(result));
  });

  let bytes = getSum(sizes);
  let gBytes = convertBtoGB(bytes);

  console.log(
    `Suma przestrzeni zajmowanej przez obrazy to ${bytes}B czyli ${gBytes}GB`
  );
};

getSize();