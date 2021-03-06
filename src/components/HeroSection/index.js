import React, {useState} from 'react';
import Video from '../../videos/u.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';

//HeroSection 변수선언 
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">  
            <HeroBg>
             <VideoBg autoPlay muted src={Video} type='video/mp4'/>
            </HeroBg>
        <HeroContent>
            <HeroH1>My Name is Kim Jung Ho</HeroH1>
            <HeroP>
               This is my Portfolio web site 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >
                  Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection