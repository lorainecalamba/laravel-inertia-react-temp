import React from "react";
import { Link } from "@inertiajs/react";

const Home = ({ posts }) => {
    console.log(posts);
    return <>
        <h1 className="title">Hello</h1>

        <div>
            {posts.data.map(post => (
                <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600 ">
                        <span>Posted On:</span>
                        <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                    </div>
                    <p className="font-medium">{post.body}</p>
                </div>
            ))}
        </div>

        <div className="py-12 px-4">
            {posts.links.map(link => (
                link.url ?
                (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                )
                :
                (
                    <span>
                        <Link
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 text-slate-300`}
                        />
                    </span>
                )
            ))}
        </div>

        {/* <Link preserveScroll href="/" className="block title mt-[1000px]">
            { new Date().toLocaleTimeString() }
        </Link> */}
    </>;
};

export default Home;
