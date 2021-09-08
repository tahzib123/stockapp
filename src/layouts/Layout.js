import React from 'react';
import Navigation from '../ui-components/Navigation';
const Layout =({children}) =>{
    return(
        <>

            <main className = "dark:bg-gray-900">
                <Navigation />
                <div className = "md: max-w-7xl  mx-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout;



