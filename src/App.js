import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Home from './containers/Home';
// import SliderHome from './containers/SliderHome';
import About from './containers/About';
import { Provider } from "react-redux";
import Err_404 from './containers/Err_404';
import Contact from './containers/Contact';
import News from './containers/News';
import SingleNews from './containers/SingleNews';
import Shop from './containers/Shop';
import Checkout from './containers/Checkout';
import SingleProduct from './containers/SingleProduct';
import Cart from './containers/Cart';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';

function App() {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Header />
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/sliderhome" component={SliderHome}/> */}
          <Route path="/about" component={About} />
          <Route path="/Err404" component={Err_404} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News} />
          <Route path="/singleNews" component={SingleNews} />
          <Route path="/checkOut" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/singleProduct" component={SingleProduct} />
          <Route path="/Err404" component={Err_404} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
