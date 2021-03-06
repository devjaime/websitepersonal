import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/style.scss";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import "./i18n";
ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>, 
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
