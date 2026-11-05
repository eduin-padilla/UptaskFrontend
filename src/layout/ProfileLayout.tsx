import Tabs from '@/components/profile/tabs'
import { Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <div>
      
      <Tabs/>

      <Outlet/>
    </div>
  )
}
