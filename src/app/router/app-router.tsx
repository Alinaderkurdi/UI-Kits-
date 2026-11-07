
import { Routes, Route } from "react-router";

//router
import Home from '../pages/home/home'

// for now I think this file and folder is good to be a central place for configuring the routing setting


const AppRouter = ()=> {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/voice-chat" element={<div>About</div>} />
            <Route path='/live-video' element={<div>live section</div>} />
            <Route path='*' element={<div>404 - Page Not Found</div>} />
        </Routes>
    )
}


export  default AppRouter;