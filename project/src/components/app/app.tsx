import { MainPageProps } from '../..';
import MainPage from '../../pages/main-page/main-page';

function App(props: MainPageProps): JSX.Element {
  return <MainPage{...props}/>;
}

export default App;
