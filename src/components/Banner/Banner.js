import React, {Component} from "react";
import './Banner.css'

class Banner extends Component{
    state = {

    }
    render(){
        return(
            <div className="banner-div">
                <img src="/imgs/banner.png" alt="principal banner" className="banner-img"/>
            </div>
        );
    }
}
export default Banner;