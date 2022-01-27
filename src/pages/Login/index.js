import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import rockGlass from '../../images/rockGlass.svg';

function Login() {
  const teste = useContext(AppContext);
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      {teste}
    </div>
  );
}

export default Login;
