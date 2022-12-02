import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, ErrorPage} from '../../pages/index';
import { AppRoutes } from '../../router/urlRouter';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';
import { Points } from '../../types/points';
// import { Reviews } from '../../types/review';

type AppScreenProps = {
  offers: Offers;
  city: City;
  points: Points;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage points={props.points} city={props.city} offers = { props.offers }/>}/>
        <Route path={AppRoutes.LOGIN} element={<LoginPage/>}/>
        <Route path={AppRoutes.OFFER} element={<RoomPage /*reviews = { props.reviews }*/ />}/>
        <Route path={AppRoutes.ERROR} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

