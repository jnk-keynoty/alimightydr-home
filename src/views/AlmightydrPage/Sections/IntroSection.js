import React from 'react'
import SectionType1 from '../../../components/Sections/SectionType1';
import Typography from '@material-ui/core/Typography';
import Emphasized from '../../../components/Titles/Emphasized';
import { Hidden } from '@material-ui/core';

function IntroSection(props) {
    const {fullpageApi} = props;
    return (
        <SectionType1 bgimage = {require("assets/img/bg_almightydr1.jpg")} fullpageApi={ fullpageApi } buttonColor = "inherit">
          <Typography variant="h1" component="h2" gutterBottom>병원 인식 부터<br/>내원 그리고 <Hidden smUp><br/></Hidden>결제까지</Typography>
          <Emphasized color="#64359A" >전지 전능한 병원 관리 솔루션</Emphasized>
          <Typography variant="h3"><b>올마이티닥터</b></Typography>
        </SectionType1>
    )
}

export default IntroSection;
