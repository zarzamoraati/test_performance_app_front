import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <div className='navbar navbar-expand-md w-100'>
        <a className='navbar-brand'></a>
        <button 
        data-target="#example"
        data-toggle="collapse"
        className='navbar-toggler'>
            <span className='navbar-toggler-icon'>
                
            </span>
        </button>
        <div className='navbar-collapse collapse' id="example">
        <ul className='navbar-nav '>
                    <li className='navbar-item'>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/about">
                        About
                        </Link>
                    </li>
                    
                </ul>
        </div>
        
    </div>
        <div>
            <Outlet/>
        </div>
    </div>
 

  )
}