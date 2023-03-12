import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                </nav>
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}