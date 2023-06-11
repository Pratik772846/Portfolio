import Navbar from "./Navbar/Nav";
import {Outlet} from "react-router-dom";
const Dashboard = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Dashboard;