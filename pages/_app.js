import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { OptionsProvider } from "../context/OptionsContext";

function MyApp({ Component, pageProps }) {
    return (
        <OptionsProvider>
            <Component {...pageProps} />;
        </OptionsProvider>
    );
}

export default MyApp;
