import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './components/Themes';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Page, Toggle } from './components/Styled';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './css/index.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    const icon = theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <>
            <ThemeProvider theme={themes[theme]}>
                <Page>
                    <Toggle className='toggle-btn' onClick={changeTheme}>
                        {icon}
                    </Toggle>
                    <Header />
                    <MainContent />
                    <Projects />
                    <Footer />
                </Page>
            </ThemeProvider>
        </>
    );
};

export default App;
