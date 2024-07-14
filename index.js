//Create variable record

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // More records can be added when needed
  ];
  
  function superbowlWin(records) {
    // Using the find() method to locate the record with a win
    const winRecord = records.find(record => record.result === "W");
    
    // Return the year if a win is found, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  console.log(superbowlWin(record)); // Output should be "2015"
  