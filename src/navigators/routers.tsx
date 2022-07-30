import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

const Navigator = (props: any) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1></h1>} />
                <Route path='/home' element={<h1> </h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;