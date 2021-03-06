import React from 'react';
import SectionType2 from '../../../components/Sections/SectionType2';
import { Hidden } from '@material-ui/core';

import { 
    BillIcon, 
    Data02Icon, Data03Icon, 
    GoalIcon, 
    Report04Icon, TalkIcon, Up01Icon, Up02Icon,
    WriteIcon
  } from '../../../components/Icons/Icons'
  
const pointsData = [
    {
      bgimage: require("assets/img/call-bg1.jpg"),
      bgcolor: "#FFEF81",
      topTextColor: "#FFF",
      iconPoints: [
        {title: "콜 데이터 분석", icon: Data02Icon,},
        {title: "고객 유입 경로 및 매체 분석", icon: Data03Icon},
        {title: "데이터에 따른 스크립트 작성", icon: WriteIcon},
      ],
      preTitle: "STRATEGY",
      title: <>데이터에 근거한 <Hidden mdUp><br/></Hidden>전문 콜센터</>,
      content: <>올닥MRM이 제공하는 콜 데이터를 분석하여 <Hidden mdDown><br/></Hidden>
      가장 효율적인 콜센터를 운영합니다.<br/><br/>
      콜 횟수, 통화 길이는 물론 콜센터 인력 구성과 배치 <Hidden mdDown><br/></Hidden>
      그리고 콜 스크립트까지 모든 운영은 데이터에 근거하여 <Hidden mdDown><br/></Hidden>
      최고의 효율을 낼 수 있도록 설계합니다.
      </>
    },
    {
      bgimage: require("assets/img/call-bg2.jpg"),
      bgcolor: "#FFEF81",
      topTextColor: "#FFF",
      iconPoints: [
        {title: "콜 상담 성공률 분석", icon: Up01Icon,},
        {title: "상담원별 성공률 분석", icon: Up02Icon},
        {title: "맞춤형 상담 역량 강화", icon: TalkIcon},
      ],
      preTitle: "STRATEGY",
      title: <>정확한 성과 분석에 <Hidden mdUp><br/></Hidden>따른 운영</>,
      content: <>고객 DB에서 상담 콜 그리고 내원까지 이어지는 <Hidden mdDown><br/></Hidden>
      성공률을 분석합니다.<br/><br/>
      각 상담원별 성공률 분석을 통해 문제점을 파악하고 <Hidden mdDown><br/></Hidden>
      맞춤형 역량 강화 교육을 진행합니다.
      </>
    },
    {
      bgimage: require("assets/img/call-bg3.jpg"),
      bgcolor: "#FFEF81",
      topTextColor: "#FFF",
      iconPoints: [
        {title: "목표 내원률 설정", icon: GoalIcon,},
        {title: "목표 상담 성공률 설정", icon: Report04Icon},
        {title: "목표 매출 달성", icon: BillIcon}
      ],
      preTitle: "STRATEGY",
      title: <>목표 설정을 통한 <Hidden mdUp><br/></Hidden>매출 달성</>,
      content: <>MRM의 목표 내원률, 목표 상담 성공률 등 <Hidden mdDown><br/></Hidden>
      목표 설정을 통해 동기를 부여하고 <Hidden mdDown><br/></Hidden>
      콜센터 성과 달성 보너스를 통해 <Hidden mdDown><br/></Hidden>
      높은 성공률에 도달합니다.
      </>
    },
  
  ]
  
  export default function PointsSection() {
      return (
          <>
            {pointsData.map((prop) => {
              return (
                <div className="section" key={prop.title}>
                  <SectionType2 data = {prop} />
                </div>
              )
            })}
          </>
      )
  }
  