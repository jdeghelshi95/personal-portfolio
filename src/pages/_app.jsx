import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Joshua Eghelshi | Porfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
