import React, { Component } from 'react';
import './rc.css';

const resview = (props) => {
  console.log('props',props.location.state);
     return (

<div>
         
<h5 class=" info-color white-text text-center py-4">
    <strong>{props.location.state.Resource} Resource</strong>
</h5>
        

<ul class="cardxsx">
  <li class="cardxsx__item">
    <div class="cardx">
      <div class="cardx__image cardx__image--fence"></div>
      <div class="cardx__content">
        <div class="cardx__title">Flex</div>
        <p class="cardx__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
        <button class="btn btn--block cardx__btn">Button</button>
      </div>
    </div>
  </li>
  <li class="cardxsx__item">
    <div class="cardx">
      <div class="cardx__image cardx__image--river"></div>
      <div class="cardx__content">
        <div class="cardx__title">Flex Grow</div>
        <p class="cardx__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
        <button class="btn btn--block cardx__btn">Button</button>
      </div>
    </div>
  </li>
  <li class="cardxsx__item">
    <div class="cardx">
      <div class="cardx__image cardx__image--record"></div>
      <div class="cardx__content">
        <div class="cardx__title">Flex Shrink</div>
        <p class="cardx__text">This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.</p>
        <button class="btn btn--block cardx__btn">Button</button>
      </div>
    </div>
  </li>
  <li class="cardxsx__item">
    <div class="cardx">
      <div class="cardx__image cardx__image--flowers"></div>
      <div class="cardx__content">
        <div class="cardx__title">Flex Basis</div>
        <p class="cardx__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
        <button class="btn btn--block cardx__btn">download</button>
      </div>
    </div>
  </li>
</ul>
</div>
            );
        }
    
    
    export default resview;