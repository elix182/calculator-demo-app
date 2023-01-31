import React from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';

const App = () : JSX.Element => {
  return (
    <Layout>
      <Calculator></Calculator>
    </Layout>
  );
}
export default App;
