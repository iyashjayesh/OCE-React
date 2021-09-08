import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"

function FullPageView(props) {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");
    let history = useHistory();

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
        <button onClick={() => history.push("/online-code-editor")} type="button" className="btn btn-primary back-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> 
            &ensp;Back to Editor
        </button>
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
