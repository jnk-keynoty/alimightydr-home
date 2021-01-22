import React from 'react'
import SectionTypeInput from '../../../components/Sections/SectionTypeInput';
import Typography from '@material-ui/core/Typography';
import Emphasized from '../../../components/Titles/Emphasized';
import { Hidden } from '@material-ui/core';

function CallcenterInquire(props) {
    return (
        <SectionTypeInput
        topNode={
            <div>
                <Typography variant="h2" component="h3" gutterBottom>
                    <b>상담 콜의 성공률은 <Hidden smUp><br/></Hidden>우연에 의해 <Hidden smUp><br/></Hidden>결정되지 않습니다.</b>
                </Typography>
                <Typography variant="h4" gutterBottom>MRM 콜 데이터 분석을 활용한<br/>
                    <Emphasized>전문 콜센터를 통해 <Hidden smUp><br/></Hidden>목표 매출을 <Hidden smUp><br/></Hidden>달성해 보세요.</Emphasized>
                </Typography>
            </div>
        }
        bottomBgColor="#FFFFFF"
        bottomTextColor="rgba(0, 0, 0, 0.87)"
        buttonCaption="문의 하기"
        buttonColor="primary"
      />

    )
}

export default CallcenterInquire;
