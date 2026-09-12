import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layout/AppLayout'
import DasboardView from '@/views/DasboardView'
import CreateProyectsViews from './views/projects/CreateProyectsViews'



export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/' element={<DasboardView/>} index/>
                    <Route path='/projects/create' element={<CreateProyectsViews/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


}