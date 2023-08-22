function TodoButton ({ setOpenModal }) {
    return (
        <button className="TodoButtonNew" 
            onClick={
                () => {
                  setOpenModal(state => !state);
                }
              }
            >+
        </button>
    )
};

export {TodoButton};