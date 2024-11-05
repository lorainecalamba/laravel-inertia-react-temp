import React from "react";
import { Link } from "@inertiajs/react";

const Home = ({ name }) => {
    return <>
        <h1 className="title">Hello {name}</h1>

        <Link preserveScroll href="/" className="block title mt-[1000px]">
            { new Date().toLocaleTimeString() }
        </Link>
    </>;
};

export default Home;
