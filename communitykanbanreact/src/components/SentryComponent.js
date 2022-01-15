import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "C:/CommunityKanban/website/CK React/ckreact/communitykanbanreact/src/App.js"


Sentry.init({
    dsn: "https://85b54575bf674c6e83608f9da504bd59@o1116656.ingest.sentry.io/6150252",
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
