import React, {Component} from "react";
import './SvgTest.css'
import svg1 from '../../img/gears.svg'
import Vivus from 'vivus'



class SvgTest extends Component {

    componentDidMount() {
        new Vivus('gears', {duration: 200, file: svg1})
    }

    render() {
        return (
            <div>
                <div id="gears"></div>
            </div>
        );
    }
}

export default SvgTest;
