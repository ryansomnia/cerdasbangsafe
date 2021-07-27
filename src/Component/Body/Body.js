import React, { Component } from 'react'
import CarouselBody from '../../Molekul/Carousel/CarouselBody'
import BannerRegist from '../../Molekul/Banner/BannerRegist'
import BannerGretting from '../../Molekul/Banner/BannerGretting'
import TabelRegistrasi from '../../Molekul/Table/TabelRegistrasi'
import Promosi from '../../Molekul/Banner/promosi'



import "./Body.css"




export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <CarouselBody />
                <BannerRegist />
                <Promosi/>
                <BannerGretting/>
                <TabelRegistrasi/>
               
                
            </div>


        );
    }
}