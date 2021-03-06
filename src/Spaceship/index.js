import styled, {keyframes} from 'styled-components'
import React from 'react'

const openLeftLeg = keyframes`
  from {
    transform: rotate(90deg) skewX(35deg); }
  to {
    transform: rotate(-35deg) skewX(-35deg); } 
`

const openRightLeg = keyframes`
  from {
    transform: rotate(-90deg) skewX(-35deg); }
  to {
    transform: rotate(35deg) skewX(35deg); }
`

const wiggle = keyframes`
  0% {
    left: calc(90% - 50px);
    top: calc(50% - 50px); }
  50% {
    left: calc(90% - 45px);
    top: calc(50% - 48px); }
  100% {
    left: calc(90% - 50px);
    top: calc(50% - 50px); } 
`

const land = keyframes`
  from {
    top: -260px; 
  }
  to {
    top: calc(100% - 180px);
    display: none; 
  }
`

const engineTurnedOn = keyframes`
  0% {
    transform-origin: top center;
    transform: scale(1); }
  50% {
    transform-origin: top center;
    transform: scale(0.8); }
  100% {
    transform-origin: top center;
    transform: scale(1); } 
`

const engineTurnOff = keyframes`
  0% {
    transform-origin: top center;
    transform: scale(1); }
  100% {
    transform-origin: top center;
    transform: scale(0); }
`

const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  left: calc(90% - 50px);
  top: calc(50% - 50px);
  height: 220px;
  animation-name: ${wiggle}, none, ${land};
  animation-duration: 320ms, 2000s, 2000ms;
  animation-delay: 0ms, 3000ms;
  animation-iteration-count: 8, 1,1;
  animation-timing-function: ease-out;
  animation-fill-mode: none,none,forwards;
`

const RocketSpan = styled.span`
  display: block;
  top: 30px;
  width: 20px;
  height: 120px;
  background-color: #a7a9b1;
  position: absolute;
  border-left: 3px solid #797d88;
  border-right: 3px solid #a7a9b1;
  border-bottom: 3px solid #191919;
  box-sizing: initial;

  :after{ 
    content: '';
    position: absolute;
    display: block;
    left: 10px;
    width: 10px;
    height: 100%;
    background-color: #d6d8e1;
  }
`

const RocketBow = styled.i`
  top: 0;
  height: 60px;
  width: 26px;
  display: block;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #a7a9b1;
  box-sizing: border-box;
  border-left: 3px solid #797d88;

  :after{
    content: '';
    position: absolute;
    display: block;
    left: 13px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`

const Fin = styled.i`
  display: block;
  background-color: blue;
  width: 10px;
  height: 15px;
  position: absolute;
  top: 20px;
  background-color: #3a3a3b;
`

const FinLeft = Fin.extend`
  border-top-left-radius: 100%;
  left: -7px;
`

const FinRight = Fin.extend`
  border-top-right-radius: 100%;
  right: -7px;
`

const RocketEngine = styled.i`
  width: 100%;
  height: 10px;
  bottom: 55px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  background-color: #3a3a3b; 
`

const Leg = styled.i`
  position: absolute;
  display: block; 
  bottom: 65px;
  width: 35px;
  height: 7px;
  background-color: #3a3a3b;
`

const LegLeft = Leg.extend`
  right: 23px;
  transform-origin: right center;
  animation-name: ${openLeftLeg};
  animation-duration: 2s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  transform: rotate(90deg) skewX(35deg);
`

const LegRight = Leg.extend`
  left: 23px;
  transform-origin: left center;
  animation: ${openRightLeg};
  animation-duration: 2s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  transform: rotate(-90deg) skewX(-35deg);
`

const Blaze = styled.i`
  position: absolute;
  top: 160px;
  left: -6px;
  display: block;
  background-color: #FF3D00;
  border-radius: 50% 50% 70% 70%;
  width: 40px;
  height: 60px;
  animation-name: ${engineTurnedOn}, ${engineTurnOff};
  animation-duration: 200ms, 1000ms;
  animation-delay: 0ms, 2000ms;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: none, forwards; 
`

const BlazeInner = styled.i`
  position: absolute;
  display: block;
  left: 5px;
  border-radius: 50% 50% 90% 90%;
`

const BlazeInnerMedium = BlazeInner.extend`
  width: 30px;
  height: 45px;
  background-color: #FFD600; 
`

const BlazeInnerExtra = BlazeInner.extend`
  left: 12px;
  width: 15px;
  height: 30px;
  background-color: #FFFF00;
`

const Spaceship = ({display, onAnimationEnd}) => (
  <Rocket display={display} onAnimationEnd={onAnimationEnd.bind(this)}>
    <RocketSpan/>
    <RocketBow/>
    <FinLeft/>
    <FinRight/>
    <RocketEngine/>
    <LegLeft/>
    <LegRight/>
    <Blaze>
      <BlazeInnerMedium/>
      <BlazeInnerExtra/>
    </Blaze>
  </Rocket> 
)

export default Spaceship


