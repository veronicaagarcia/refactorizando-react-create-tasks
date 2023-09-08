import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
      if (change.key === 'TASKS') {
        console.log('Cambios en TASKS');
        setStorageChange(true);
      }
    });

    const toggleShowS = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShowS}
      />
    );
  }
}

export { withStorageListener };