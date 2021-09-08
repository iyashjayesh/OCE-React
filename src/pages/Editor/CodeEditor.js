import ScriptEditor from "../../components/ScriptEditor/Editor";
import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Header from "../../components/Header/Header";
import {Link} from 'react-router-dom'

function CodeEditor() {
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
        <div>
            <Header/>
            <div className="pane top-pane">
                <ScriptEditor
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <ScriptEditor
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <ScriptEditor
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <Link to="/fullview">
                    <button type="button" className="btn btn-primary bon">FullPageView</button>
                </Link>

                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-script"
                    frameborder="0"
                    width="100%"
                    height="100%"
                />
            </div>
    </div>
  );
}

export default CodeEditor;