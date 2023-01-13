function sayThanks(name) {
    console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
  }
  const name = 'Cole'
  sayThanks(name);

  function monitorCount(rows,columns){
    return rows * columns
  }
  
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
   return monitorCount(rows,columns) * 200
  }
  const totalCost = costOfMonitors(5,4)
  console.log(totalCost)

  const plantNeedsWater = function(day){
    if(day === 'Wednesday'){
      return true
    }
    else{
      return false
    }
  }
  
  console.log(plantNeedsWater('Tuesday'))
  

  //LITERALS AND FUNCTIONS
  let studentName = {
    surname : 'Faniyi',
    othername: 'Nurudeen',
    age : 25
  };
  delete studentName.othername;
  console.log(studentName.surname)