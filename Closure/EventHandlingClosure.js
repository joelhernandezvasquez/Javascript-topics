// Event Handling:
// Simulate an event handling scenario where you can add and remove event listeners using closure for maintaining the listener array.


const createEventManager = () =>{
    let events = [];

   const addListener = (listener) =>{
    events = [...events,listener]
   }

   const removeListener = (listener) =>{
    const listenerIndex = events.indexOf(listener)
    if(listenerIndex !==-1){
        events.toSpliced(listenerIndex,1);
    }
     
   }

   const triggerEvents = (eventData) =>{
    events.forEach((listener)=>{
        console.log(listener(eventData));
    })
   }

   return {
    addListener,
    removeListener,
    triggerEvents
   }
}

const eventManager = createEventManager();

const listener1 = (data) =>{ console.log('Listener 1', data) }
const listener2 = (data) =>{ console.log('Listener 2', data) }
const listener3 = (data) =>{ console.log('Listener 3', data) }


eventManager.addListener(listener1);
eventManager.addListener(listener2);
eventManager.addListener(listener3);
eventManager.triggerEvents('Event');
eventManager.removeListener(listener2);
eventManager.triggerEvents('Event 1');




