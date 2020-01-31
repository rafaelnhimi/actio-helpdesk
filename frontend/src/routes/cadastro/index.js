import React from 'react';
import { Route } from 'react-router-dom';
import Usuario from './routes/usuario';

const CardComponents = ({ match }) => (
    <div>
      <Route path={`${match.url}/usuario`} component={Usuario}/>
    </div>
  )
  
  export default CardComponents;
  