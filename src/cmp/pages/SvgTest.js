import React, {Component} from "react";
import './SvgTest.css'
import svg1 from '../../img/gears.svg'
import svg2 from '../../img/man.svg'
import Vivus from 'vivus'
class SvgTest extends Component {
    componentDidMount() {
        new Vivus('gears', {
            duration: 200, 
            file: svg1,
            animTimingFunction: Vivus.EASE_OUT
        })
        new Vivus('man', {
            duration: 200, 
            file: svg2,
            animTimingFunction: Vivus.EASE_OUT
        })
    }
    

    render() {
        return (
            <div className='svgAnime'>
                <div id="gears"></div>
                    <section>
                       <p>Time is our privilegy</p> 
                       <p>Your problems are our problems</p> 
                       <p>Its time to cooperate</p> 
                    </section>
                <div id="man"></div>
            </div>
        );
    }
}

export default SvgTest;

