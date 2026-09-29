import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layout/AppLayout'
import DasboardView from '@/views/DasboardView'
import CreateProyectsViews from './views/projects/CreateProjectsViews'
import EditProjectView from './views/projects/EditProjectView'
import ProjectDetailsView from './views/projects/ProjectDetailsView'
import AuthLayout from './layout/AuthLayout'
import RegisterView from './views/auth/RegisterView'
import LoginView from './views/auth/LoginView'
import ConfirmAccountView from './views/auth/ConfirmAccountView'



export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/' element={<DasboardView/>} index/>
                    <Route path='/projects/create' element={<CreateProyectsViews/>} />
                    <Route path='/projects/:projectId/edit' element={<EditProjectView/>} />
                    <Route path='/projects/:projectId' element={<ProjectDetailsView/>} />
                </Route>

                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>} />
                    <Route path='/auth/register' element={<RegisterView/>} />
                    <Route path='/auth/confirm-account' element={<ConfirmAccountView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


}