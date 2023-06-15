import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Intro from '../pages/Intro/Intro.jsx'
import Description from '../pages/Description/Description.jsx'
import Screen from '../pages/Screen/Screen'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Intro/>}></Route>
                <Route path='/description' element={<Description/>}></Route>
                <Route path='/screen' element={<Screen/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router