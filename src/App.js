
import './App.css';
import {Redirect, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive'
import MajorSlider from "./components/MajorSlider/MajorSlider";
import MajorSliderMobile from "./components/MobileVersion/MajorSliderMobile/MajorSliderMobile";
import TokarnayaObrabotka from "./components/TokarnayaObrabotka/TokarnayaObrabotka";
import Footer from "./components/Footer/Footer";


const App = (props) => {
  return (
    <div className="App">
        <MediaQuery maxWidth={499}>
            <Redirect to={'/mobile'} />
            <Route path='/mobile' exact component={MajorSliderMobile} />
        </MediaQuery>
        <MediaQuery minWidth={500}>
            <Redirect to={'/'} />
            <Route path='/' exact component={MajorSlider} />
            <Route path='/tokarnayaobrabotka' exact component={TokarnayaObrabotka} />
        </MediaQuery>
        <Footer />
    </div>
  );
}

export default App;
