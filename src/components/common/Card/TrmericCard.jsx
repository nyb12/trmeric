import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link,useNavigate } from "react-router-dom";
import TrText from "../TrText/TrText";
import Fonts from "../../../constants/Fonts";
import { FontSizes } from "../../../constants/Sizes";
import {Nexatech} from "../../../svg.js";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { SpatialTracking } from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';




export default function TrmericCard() {
  const navigate = useNavigate();


  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/300"
        title="green iguana"
      /> */}
      <CardContent>
        <div className="display-row p-24 g-8">
          
            <img className="logo"src={Nexatech} alt="logo" />
         
          <TrText sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Nexatech Solutions
          </TrText>
       
        </div>  
      </CardContent>

      <CardContent className="display-row  p-24 g-8" >
        <Button className="primary-btn" size="medium" onClick={()=>{navigate('/viewdetails')}}>View Details</Button>
       
       <div className="dflex">
       <span>Shortlist</span>
        <BookmarkBorderIcon className="ml-8 shortlist-color"></BookmarkBorderIcon>
       </div>
       
       
        
      </CardContent>
      <CardContent>
        <div className="display-start pl-24 pr-24 g-8">
          <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Average Customer Rating
          </TrText>
          </div>
         
         <div>
          <div  className="display-start-row  g-8">
            <div className="rating">
              
            <span>3 </span> <Rating name="half-rating-read" className="mt-5"defaultValue={3.0} precision={0.5} readOnly size="small"/>
             
          </div>
         
          <div>
                 <a href="#" className="shortlist-color">45 Reviews</a>
                 
          </div>
          </div>
         </div>
          
        </div>
      </CardContent>

      <CardContent>
        <div className="display-start pl-24   g-8">
        <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Company
          </TrText>
          </div>
          <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  
                  }}>
            Established 2005, HQ in San Fransico
          </TrText>
          </div>
        </div>
      </CardContent>

      <CardContent>
        <div className="display-start pl-24 pr-24 g-8">
        <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Capabilties
          </TrText>
          </div>
          <div>
          <span className="badge"> AI </span>
          <span className="badge"> IoT</span>
          <span className="badge"> Automation </span>


        
          </div>
        </div>
      </CardContent>


      <CardContent>
        <div className="display-start pl-24 pr-24 pb-24  g-8">
        <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Readiness to Engage
          </TrText>
          </div>
          <div>
          <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  
                  }}>
            Ready in 2 weeks
          </TrText>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
