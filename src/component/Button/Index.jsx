/* eslint-disable react/prop-types */
import React from 'react';
import './Index.css';

export default function Button({ handleRefreshButton }) {
  return (
    <button type="button" className="updateBtn" onClick={handleRefreshButton}>Atualizar</button>
  );
}
