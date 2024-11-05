import { Link } from "@inertiajs/react";
import React from "react";

const FrontEnd = ({ children }) => {
    return <>
        <header>
            <nav>
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/create" className="nav-link">Create</Link>
            </nav>
        </header>

        <main>
            {children}
        </main>
    </>;
};

export default FrontEnd;
