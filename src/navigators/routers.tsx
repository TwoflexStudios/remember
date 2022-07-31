import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import OpenTVScreen from '../screens/openTV';

const Navigator = ({children}: any) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path='/aberta' element={<OpenTVScreen />} />
                <Route path='/lembretes' element={<h1>lembretes</h1>} />
                <Route path='/favoritos' element={<h1>favoritos</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;