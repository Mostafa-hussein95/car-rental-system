import React from 'react'
import Header from './../../Components/Header/Header';
import RentSteps from './../../Components/RentSteps/RentSteps';
import BrandSlider from '../../Components/BrandSlider/BrandSlider';
import WhyUs from '../../Components/WhyUs/WhyUs';
import FeedbackSlider from '../../Components/FeedbackSlider/FeedbackSlider';
import DownloadApp from '../../Components/DownloadApp/DownloadApp';
import PopularCars from '../../Components/PopularCars/PopularCars';

export default function Home() {
  return (
    <>
    <Header/>
    <PopularCars/>
    <RentSteps/>
    <BrandSlider/>
    <WhyUs/>
    <FeedbackSlider/>
    <DownloadApp/>
    </>
  )
}
