import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

const Navigator = ({children}: any) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path='/' element={<h1>home</h1>} />
                <Route path='/lembretes' element={<h1>lembretes</h1>} />
                <Route path='/favoritos' element={<h1>favoritos</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;