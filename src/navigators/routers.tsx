import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import FavoriteScreen from '../screens/favorites';

import OpenTVScreen from '../screens/openTV';
import ChanelScreen from '../screens/openTV/[id_revel]';

const Navigator = ({children}: any) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path='/tvaberta' element={<OpenTVScreen />} />
                <Route path='/tvaberta/:id_revel' element={<ChanelScreen />} />
                <Route path='/lembretes' element={<h1>lembretes</h1>} />
                <Route path='/favoritos' element={<FavoriteScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;