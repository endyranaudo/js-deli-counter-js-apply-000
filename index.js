var katzDeli = [];
let counter = 1;

function takeANumber(katzDeli) {
  katzDeli.push(counter);
  counter += 1;
  return(`Hi, Welcome number ${counter}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}	


var line = [];

 function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}