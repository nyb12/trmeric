import { useState } from 'react';
import '../../../index.css'
import { CopyAll } from '@mui/icons-material';
import AccordionCard from '../AccordionCard/AccordionCards';
import TrmericCard from '../Card/TrmericCard';
import { Button } from '@mui/material';
function DesignSystem() {
    const [colors, setColors] = useState('');
    function copyColor(colors) {

        navigator.clipboard.writeText(colors)
    }

    return (
        <div>
            <div className='header'>
                <h1 className='header_name'>Design System</h1>

            </div>

            <div className="main_content">

                {/* Colors */}
                <div className='color_head'>
                    <h3>Colors:</h3>
                </div>

                <div className="color_scheme">

                    <div className="color_scheme_1" onClick={() => { setColors(copyColor('#FFFBE1')) }} style={{cursor:"pointer"}}>#FFFBE1</div>
                    <div className="color_scheme_2" onClick={() => {
                       setColors(copyColor('#FFF7C8')) 
                    }} style={{cursor:"pointer"}}>#FFF7C8           </div>
                    <div className="color_scheme_3" onClick={() => {
                       setColors(copyColor('#FFF09C')) 
                    }} style={{cursor:"pointer"}}>#FFF09C</div>
                    <div className="color_scheme_4" onClick={() => { setColors(copyColor('#FFE674')) }} style={{cursor:"pointer"}}>#FFE674</div>
                    <div className="color_scheme_5" onClick={() => { setColors(copyColor('#FFD826')) }} style={{cursor:"pointer"}}>#FFD826</div>
                    <div className="color_scheme_6" onClick={() => { setColors(copyColor('#FFC527')) }} style={{cursor:"pointer"}}>#FFC527</div>
                    <div className="color_scheme_7" onClick={() => { setColors(copyColor('#FFB10A')) }} style={{cursor:"pointer"}}>#FFB10A</div>
                    <div className="color_scheme_8" onClick={() => { setColors(copyColor('#F79A08')) }} style={{cursor:"pointer"}}>#F79A08</div>
                </div>

                {/* Typography */}
                <div className='color_head'>
                    <h3>Typography:</h3>
                    <h4>Font: Poppins</h4>
                    <p className="p8"> 8px : Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p className="p10"> 10px: Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                    <p className="p12">12px : Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p className="p14">14px : Lorem ipsum dolor sit amet consectetur adipisicing elit </p>

                    <h5>h5 : <i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quibusdam.r impedit repellendus obcaecati odit sunt.</i></h5>

                    <h4>h4 : <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus soluta a officia voluptatem eos laboriosam minus odit facere repellendus.</i></h4>

                    <h2>h2 : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorem laboriosam nesciunt inventore, porro nihil cum molestias atque neque natus!</h2>

                    <h1>h1 : sint asperiores quis earum! Quaerat, blanditiis.</h1>

                   
                </div>

              
                    
                <div className='btn_head'>
                    <div style={{marginTop:"10px"}}>Buttons</div>
                </div>
                <div className='button_comp'>
               
                    
                    <div className="left_sec">

                    <div className="primary_sec">Primary Button   <button className='primary_button'>Click Me</button> </div>
                    <div className="primary_sec"> Secondary Button <button className='sec_button'>Click Me</button> </div>

                 
               
                 
                    </div>

                    <div className="left_sec">
                    <div className="primary_sec">Classes Used   <div className='p12'>primary_button&nbsp; <span className='white_bg'>primary_button:hover &nbsp;</span> primary_button:active &nbsp;</div> </div>
                    <div className="primary_sec"> Classes Used   <div className='p12'>primary_button&nbsp; <span className='white_bg'>primary_button:hover &nbsp;</span> primary_button:active &nbsp;</div>  </div>
                    </div>
               
                 
                </div>

                  <div className="card_comp">
                    
                    
                    </div>  


            </div>

        </div>
    );
}
export default DesignSystem;