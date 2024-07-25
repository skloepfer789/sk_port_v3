import { Outlet } from "@remix-run/react";

import Footer from '../components/footer.component';
import Background from "../components/background.component";

export const links = () => [
];

export default function App() {
    
    return (
    <>
        <Outlet />
        <Background />
        
    </>
    );
}

//add footer back to bottom