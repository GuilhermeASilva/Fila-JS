const orderBy = (arr, props, orders) =>
    [...arr].sort((a, b) =>
        props.reduce((acc, prop, i) => {
            if (acc === 0) {
                const [p1, p2] =
                    orders && orders[i] === "desc"
                        ? [b[prop], a[prop]]
                        : [a[prop], b[prop]];
                acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
            }
            return acc;
        }, 0)
    );

class Queue{
    constructor(lista){
      //initialize the items in queue
      this._items = []
      // enqueuing the items passed to the constructor
      this.enqueue(lista)
    }
     
   
     enqueue(lista){
       //push items into the queue
       for(let i in lista){
           this._items.push(lista[i])
       }
       return this._items;
     }
   
     dequeue(count=1){
       //pull out the first item from the queue
       this._items.splice(0,count);
       return this._items;
     }
   
     peek(){
       //peek at the first item from the queue
       return this._items[0]
     }
   
     size(){
       //get the length of queue
       return this._items.length
     }
   
     isEmpty(){
       //find whether the queue is empty or no
       return this._items.length===0
     }
   }

   


   los = [
   {tipo: "Manutenção", prazo: 12}, 
   {tipo: "Manutenção", prazo: 7}, 
   {tipo: "Customização", prazo: 340}, 
   {tipo: "Pintura", prazo: 200},
   {tipo: "Pintura", prazo: 250}
]
    let my_queue = new Queue(los)
    console.log(my_queue.enqueue())

  console.log(orderBy(los, ["tipo"], ["asc"]))
    

    


    
    
   


   



