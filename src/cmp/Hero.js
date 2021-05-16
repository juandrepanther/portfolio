import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'
import Button from '../cmp/Button'
import {IoMdArrowBack, IoMdArrowForward, IoMdArrowRoundForward} from 'react-icons/io'

//styles
const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const HeroWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;

`
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    &::before {
        content: '';
        position: absolute;
        z-index: -2;
        width:100%;
        height:100%;
        bottom:0vh;
        left:0;
        overflow: hidden;
        opacity:0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100% )
        
    }
`
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: white;
    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    

`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }

`
const PrevArrow = styled(IoMdArrowBack)`
    ${arrowButtons}
`
const NextArrow = styled(IoMdArrowForward)`
    ${arrowButtons}
`

function Hero({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length //how many slides in there => 10
    const timeout = useRef(null)

    //useEffect for timeout the slides, automatic changes
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current +1))
        } 
        timeout.current = setTimeout(nextSlide, 4000)
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide =() => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        /*if last slide is reached (length -1) then set to start slide 0
        otherwise just increment value and switch to next slide
        */
    }
    const prevSlide =() => setCurrent(current === 0 ? current - 1 : current -1)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index)=> {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt}/>
                                <HeroContent>
                                    <h1 style={{textAlign: 'left', fontSize: '45px'}}>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button
                                    buttonStyle='btn--outline'
                                    to={slide.path} primary='true'>
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                    
                                </HeroContent>
                            </HeroSlider>
                            )}
                            
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
