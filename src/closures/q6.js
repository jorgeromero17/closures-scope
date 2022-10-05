//https://dmitripavlutin.com/javascript-closures-interview-questions/
function createStack() {
    let items=[];

    return {
        push(item){
            items.push(item)
        },
        pop(){
            items.pop();
        },
        showitems(){
            console.log(items);
        }
    }
  
  }
  const stack = createStack();
  stack.push(15);
  stack.push(5);
  stack.push(2);
  stack.pop(); // => 5
  stack.showitems();
 console.log(stack.items); //