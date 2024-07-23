import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='navbar navbar-expand-lg'>
        <a className='navbar-brand'></a>
        <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'>
                
            </span>
        </button>
        <div className='navbar-collapse collapse' id="example">

        </div>
        <div>
            <Outlet/>
        </div>
    </div>

  )
}