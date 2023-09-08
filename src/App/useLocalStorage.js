import React from "react";

function useLocalStorage (nameStorage, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
    
  React.useEffect(()=>{
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(nameStorage);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(nameStorage, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false);
        setSincronizedItem(true);
      } catch(error){
      setLoading(false);
      setError(true);
    }
  }, 2500);
}, [sincronizedItem]);
    
  const saveItem = (newArrayItem) => {
    localStorage.setItem(nameStorage, JSON.stringify(newArrayItem));
    
    setItem(newArrayItem);
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  
  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export {useLocalStorage};