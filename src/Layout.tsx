import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='navbar navbar-expand-lg'>
        <a className='navbar-brand'></a>
        <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'>
                <ul className='nabvar-nav '>
                    <li className='navbar-item'>
                        <a className='navbar-link'
                        href="/">
                            Home
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-link'
                        href="/about">
                                About                            
                        </a>
                    </li>
                    
                </ul>
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