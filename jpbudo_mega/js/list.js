const { writeFrm, submitHandler } = require("./write");

let boardStr = localStorage.getItem('board');
console.log(boardStr);
writeFrm.addEventListener("submit", submitHandler);
