import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import '../css/app.css';
import FrontEnd from "@/Layouts/FrontEnd";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <FrontEnd children={page}/>)

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#fff',
        showSpinner: true
    }
});
