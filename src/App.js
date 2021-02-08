import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import MediaQuery from 'react-responsive'
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/MobileVersion/FooterMobile/FooterMobile";
import Operations from "./components/Operations/Operations";
import OperationsMobile from "./components/MobileVersion/OperationsMobile/OperationsMobile";
import {
    dataFromBoringOperation,
    dataFromMillingOperation,
    dataFromTurningOperation,
    dataFromGrindingOperation,
    dataFromGearCuttingOperation,
    dataFromThermalOperation,
    dataFromWeldingOperation,
    dataFromPlasmaLaserCuttingOperation,
    dataFromElectroerosiveCuttingOperation,
    dataFromSheetBendingOperation
} from './components/Operations/contentOperation'
import HomePage from "./components/HomePage/HomePage";
import ExecutedWorks from "./components/executedWorks/executedWorks";
import ExecutedWorksMobile from "./components/MobileVersion/executedWorksMobile/executedWorksMobile";
import HomePageMobile from "./components/MobileVersion/HomePageMobile/HomePageMobile";
import Contact from "./components/Contacts/Contact";
import ContactMobile from "./components/MobileVersion/ContactsMobile/ContactMobile";



const App = () => {
  return (
    <div className="App">
        <MediaQuery maxWidth={499}>

            <Route path='/' exact component={HomePageMobile} />
            <Route path='/turning'  render={ () => <OperationsMobile data={dataFromTurningOperation}/>} />
            <Route path='/milling'  render={ () => <OperationsMobile data={dataFromMillingOperation}/>} />
            <Route path='/boring'  render={ () => <OperationsMobile data={dataFromBoringOperation}/>} />
            <Route path='/grinding'  render={ () => <OperationsMobile data={dataFromGrindingOperation}/>} />
            <Route path='/gearCutting'  render={ () => <OperationsMobile data={dataFromGearCuttingOperation}/>} />
            <Route path='/thermal'  render = {() => <OperationsMobile data={dataFromThermalOperation} />}/>
            <Route path='/welding'  render = {() => <OperationsMobile data={dataFromWeldingOperation} />}/>
            <Route path='/plasmaLaserCutting'  render = {() => <OperationsMobile data={dataFromPlasmaLaserCuttingOperation} />}/>
            <Route path='/electroerosiveCutting'  render = {() => <OperationsMobile data={dataFromElectroerosiveCuttingOperation} />}/>
            <Route path='/sheetBending'  render = {() => <OperationsMobile data={dataFromSheetBendingOperation} />}/>
            <Route path='/photos'  render = {() => <ExecutedWorksMobile />}/>
            <Route path='/contacts'  render = {() => <ContactMobile />}/>
            <FooterMobile />
        </MediaQuery>
        <MediaQuery minWidth={500}>

            <Route path='/' exact component={HomePage} />
            <Route path='/turning'  render = {() => <Operations data={dataFromTurningOperation} />} />
            <Route path='/milling'  render = {() => <Operations data={dataFromMillingOperation} />}/>
            <Route path='/boring'  render = {() => <Operations data={dataFromBoringOperation} />}/>
            <Route path='/grinding'  render = {() => <Operations data={dataFromGrindingOperation} />}/>
            <Route path='/gearCutting'  render = {() => <Operations data={dataFromGearCuttingOperation} />}/>
            <Route path='/thermal'  render = {() => <Operations data={dataFromThermalOperation} />}/>
            <Route path='/welding'  render = {() => <Operations data={dataFromWeldingOperation} />}/>
            <Route path='/plasmaLaserCutting'  render = {() => <Operations data={dataFromPlasmaLaserCuttingOperation} />}/>
            <Route path='/electroerosiveCutting'  render = {() => <Operations data={dataFromElectroerosiveCuttingOperation} />}/>
            <Route path='/sheetBending'  render = {() => <Operations data={dataFromSheetBendingOperation} />}/>
            <Route path='/photos'  render = {() => <ExecutedWorks />}/>
            <Route path='/contacts'  render = {() => <Contact />}/>

            <Footer />
        </MediaQuery>

    </div>
  );
}

export default App;
