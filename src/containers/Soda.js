import React from 'react';

import Scroll from '../components/ScrollBar'
import Card from '../components/Card'
import styled from 'styled-components';

import { connect } from "react-redux";

function App(props) {
  const Main = styled.div``;
  return (
    <Main className="App">
      <Scroll>
      {props.soda.map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </Scroll>
    </Main>
  );
}

const mapStateToPrp = state => {
  console.log(state);
  return {
    myList: state.myList,
    soda: state.soda,
  
  };
};

export default connect(mapStateToPrp, null)(App);
