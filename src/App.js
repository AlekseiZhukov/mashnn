import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import MediaQuery from 'react-responsive'

import MajorSliderMobile from "./components/MobileVersion/MajorSliderMobile/MajorSliderMobile";

import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/MobileVersion/FooterMobile/FooterMobile";

import Operations from "./components/Operations/Operations";
import OperationsMobile from "./components/MobileVersion/OperationsMobile/OperationsMobile";
import {
    dataFromBoringOperation,
    dataFromMillingOperation,
    dataFromTurningOperation,
    dataFromGrindingOperation, dataFromGearCuttingOperation
} from './components/Operations/contentOperation'
import HomePage from "./components/HomePage/HomePage";
import ExecutedWorks from "./components/executedWorks/executedWorks";



const App = (props) => {
  return (
    <div className="App">
        <MediaQuery maxWidth={499}>

            <Route path='/' exact component={MajorSliderMobile} />
            <Route path='/turning'  render={ () => <OperationsMobile data={dataFromTurningOperation}/>} />
            <Route path='/milling'  render={ () => <OperationsMobile data={dataFromMillingOperation}/>} />
            <Route path='/boring'  render={ () => <OperationsMobile data={dataFromBoringOperation}/>} />
            <Route path='/grinding'  render={ () => <OperationsMobile data={dataFromGrindingOperation}/>} />
            <Route path='/gearCutting'  render={ () => <OperationsMobile data={dataFromGearCuttingOperation}/>} />
            <FooterMobile />
        </MediaQuery>
        <MediaQuery minWidth={500}>

            <Route path='/' exact component={HomePage} />
            <Route path='/turning'  render = {() => <Operations data={dataFromTurningOperation} />} />
            <Route path='/milling'  render = {() => <Operations data={dataFromMillingOperation} />}/>
            <Route path='/boring'  render = {() => <Operations data={dataFromBoringOperation} />}/>
            <Route path='/grinding'  render = {() => <Operations data={dataFromGrindingOperation} />}/>
            <Route path='/gearCutting'  render = {() => <Operations data={dataFromGearCuttingOperation} />}/>

            <Footer />
        </MediaQuery>

    </div>
  );
}

export default App;
