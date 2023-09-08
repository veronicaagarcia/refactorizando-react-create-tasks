import React from 'react';
import { withStorageListener } from './withStorageListener';
import './changeAlert.css';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
                <p>Algo cambio</p>
                <button className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}
                >
                Click para actualizar
                </button>
            </div>
        </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };