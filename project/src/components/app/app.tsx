import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, ErrorPage} from '../../pages/index';
import { AppRoutes } from '../../router/urlRouter';
import { Offers } from '../../types/offer';
// import { Reviews } from '../../types/review';

type AppScreenProps = {
  offers: Offers;
  // reviews: Reviews;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage offers = { props.offers }/>}/>
        <Route path={AppRoutes.LOGIN} element={<LoginPage/>}/>
        <Route path={AppRoutes.OFFER} element={<RoomPage /*reviews = { props.reviews }*/ />}/>
        <Route path={AppRoutes.ERROR} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

