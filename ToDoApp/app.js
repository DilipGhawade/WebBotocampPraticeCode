let input = prompt("what would you like to do?");
const todos = ['collect chickens Eggs','Clean Litter Box'];

while (input !== "quit") {
    if(input==='list'){
        console.log('**********************')
        for(let i =0;i<todos.lengthli++){
            console.log(`${i}: ${todos[i]} `);
        }
        console.log('**********************')
    }
  input = prompt("what would you like to do?");
}
console.log("Ok Quit the app");
