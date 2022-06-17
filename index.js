function superbowlWin(records) {
    console.log('hello I am here',records);
    const record = records.find(record =>  record.result == 'W');
    // console.log(record.year); 
    if (record != undefined)  {
    return record.year; 
    }
}

//False 0 undefined null Nan


// [2015].find(record);
// [2014].find(record);





// X Write a function called superbowlWin() in index.js:

//  X The function should receive 1 argument, an Array of JavaScript Objects
// X Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined 