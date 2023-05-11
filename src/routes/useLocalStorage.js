import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [sync, SetSync] = React.useState(true);
  
    React.useEffect(()=> {
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if(!localStorageItem) {
          
         localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
        }
        else {
          parsedItem= JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        
        } catch (error) {
          setError(error)
        }
        finally {
          setLoading(false);
        }
        
        }, 1000);
      },[sync]);
  
   const saveItem = (newItem)=>{
    try{
      const strItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strItem);
      setItem(newItem);
    } 
    catch(error) {
      setError(error);
    }
};

    const syncUp = () => {
      setLoading(true);
      SetSync(false);
    }

    return {
      item, 
      saveItem,
      loading, 
      error,
      syncUp
    };
  }
  
export { useLocalStorage}  