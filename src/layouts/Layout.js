import React from 'react';
import Navigation from '../ui-components/Navigation';
const Layout =({children}) =>{
    return(
        <>

            <main className = "dark:bg-gray-900">
                <Navigation />
                <div className="mx-5 md:max-w-7xl md:mx-auto ">
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout;



