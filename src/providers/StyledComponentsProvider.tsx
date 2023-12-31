import { ReactNode, useState } from 'react'
import styled, {
    ThemeProvider,
    createGlobalStyle,
    DefaultTheme
} from 'styled-components'
import {
    ThorinGlobalStyles,
    lightTheme as thorinLightTheme,
    darkTheme as thorinDarkTheme
} from '@ensdomains/thorin'
import { sky, skyDark } from '@radix-ui/colors'

import { BackgroundImage, Header } from '@/components'

import { APPLICATION_WIDTH } from '@/constants'
import { Footer } from '@/components/Footer'

const lightTheme: DefaultTheme = {
    ...thorinLightTheme,
    colors: {
        no1appBackground: sky.sky1,
        no2subtleBackground: sky.sky2,

        no3elementBackground: sky.sky3,
        no4elementBackgroundHovered: sky.sky4,
        no5elementBackgroundActive: sky.sky5,

        no6bordersNonInteractive: sky.sky6,
        no7bordersInteractive: sky.sky7,
        no8bordersInteractiveFocused: sky.sky8,

        no9solidBackground: sky.sky9,
        no10solidBackgroundHovered: sky.sky10,

        no11textContrastLow: sky.sky11,
        no12textContrastHigh: sky.sky12,
        ...thorinLightTheme.colors
    }
}

const darkTheme: DefaultTheme = {
    ...thorinDarkTheme,
    colors: {
        no1appBackground: skyDark.sky1,
        no2subtleBackground: skyDark.sky2,

        no3elementBackground: skyDark.sky3,
        no4elementBackgroundHovered: skyDark.sky4,
        no5elementBackgroundActive: skyDark.sky5,

        no6bordersNonInteractive: skyDark.sky6,
        no7bordersInteractive: skyDark.sky7,
        no8bordersInteractiveFocused: skyDark.sky8,

        no9solidBackground: skyDark.sky9,
        no10solidBackgroundHovered: skyDark.sky10,

        no11textContrastLow: skyDark.sky11,
        no12textContrastHigh: skyDark.sky12,
        ...thorinDarkTheme.colors
    }
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        width: 100%;
        position: relative;

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        place-items: center;
        color: ${({ theme }) => theme.colors.no12textContrastHigh};
        background-color: ${({ theme }) => theme.colors.no1appBackground};
        margin: 0;
    }
`

enum Theme {
    LIGHT,
    DARK
}

interface StyledComponentsProviderProps {
    children: ReactNode
}

export function StyledComponentsProvider({
    children
}: StyledComponentsProviderProps) {
    const [theme] = useState(Theme.DARK)

    return (
        <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ThorinGlobalStyles />
            <BackgroundImage />
            <Header />
            <Container>{children}</Container>
            <Footer />
        </ThemeProvider>
    )
}

const Container = styled.div`
    width: ${APPLICATION_WIDTH};
    max-width: ${APPLICATION_WIDTH};
    min-height: calc(100vh - 280px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
