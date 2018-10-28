let numbers = [1 , 2, 3, 4 , 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.forEach(Column => {console.log(Column)  
});
numbers.forEach(Column => {if (Column % 2 === 0) {console.log(Column)}});
numbers.forEach(Column => {if (Column % 1 === 0) {console.log(`odd`)}});