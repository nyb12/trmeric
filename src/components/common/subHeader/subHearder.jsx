import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TrText from '../TrText/TrText';
import Fonts from '../../../constants/Fonts';
import { FontSizes } from "../../../constants/Sizes";

const steps = [
  'Discover',
  'Engage',
  'Build',
  'Transact'
];

export default function SubHeader() {
  return (
    <div>
      <div className="h-200 p-fixed">
        <div className="display-column">
          <div className='display-start-row mt-5 pt-8 pl-24 pr-24'>
            <div className="lh-24 mb-8">
              <TrText sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  
                  }}>
                Digital Inventory System
              </TrText>
            </div>
          <div>
            
            <button className='secondary-btn'>Invite People</button>
            
          </div>
          </div>
          <div>
          <Stepper className='w-50 pl-24' activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
          </div>
        </div>
      </div>
    
    </div>
  );
}
