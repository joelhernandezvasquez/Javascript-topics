

const createListManager = () =>{
 let listManager = [];

  const addItem = (item) =>{
   listManager = [...listManager,item];
  }

  const removeItem = (item)=>{
   const itemIndex = listManager.indexOf(item);
   if(itemIndex !==-1){
     listManager.splice(itemIndex,1);
   }
  
  }

  const getItems = () =>{
    return listManager;
  }

  return {
    addItem,
    removeItem,
    getItems
  }
}

const manager = createListManager();
manager.addItem("Item 1");
manager.addItem("Item 2");
console.log(manager.getItems()); // ["Item 1", "Item 2"]

manager.removeItem("Item 1");
console.log(manager.getItems()); // ["Item 2"]