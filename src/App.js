import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">
      
      <div>
        <Dashboard />
        <Product />
      </div>
      <Form />
      <Header />

    </div>
  );
}

export default App;
