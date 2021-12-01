import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme'
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Menu />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
