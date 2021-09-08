import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function FullPageView(props) {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");
    
    useEffect(() => {
        const timeout = setTimeout(() => {
        setSrcDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
        `);
        }, 500);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
    <div className="pane-full-page">  
        <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-script"
            frameborder="0"
            className="iframe-box"
        />
    </div>
  );
}

export default FullPageView;
