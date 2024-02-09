import { useState } from "react"
import { Search, Info, Toggle } from "./components"
import './App.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax" 


export const App = () => {
    
    const [ dark, setDark ] = useState(false)

    return (
        <div className="app" theme={dark ? 'dark' : ''}>    
            <Parallax pages={2} style={{ top: '0', left: '0' }} className="app__parallax">
                <Toggle isDark={dark} handdleChange={() => setDark(!dark)} />
                <ParallaxLayer offset={0} speed={-0.25}>
                    <div className="parallax__layer bg"  id="clouds3"/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.15}>
                    <div className="parallax__layer bg"  id="clouds2"/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.015}>
                    <div className="parallax__layer bg"  id="clouds1"/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}>
                    <Search />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <Info />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}