import { MainPageProps } from '../..';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, ErrorPage} from '../../pages/index';
import { AppRoutes } from '../../router/urlRouter';

function App(props: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage{...props}/>}/>
        <Route path={AppRoutes.LOGIN} element={<LoginPage/>}/>
        <Route path={AppRoutes.ROOM} element={<RoomPage/>}/>
        <Route path={AppRoutes.ERROR} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

