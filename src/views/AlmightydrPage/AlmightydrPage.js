import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
// import theme from "../../theme"
// import { ThemeProvider } from "@material-ui/core/styles"

import Header from "components/HeaderA/Header.js"
import HeaderLinks from "components/HeaderA/HeaderLinks.js"
import ReactFullpage from "@fullpage/react-fullpage"

import almightydrPageStyle from "assets/jss/material-kit-react/views/almightydrPage.js"

import logoUrl from "../../assets/ico/logo.svg"

import IntroSection from "./Sections/IntroSection"
import ManagementSection from "./Sections/ManagementSection"
import AnalysisSection from "./Sections/AnalysisSection"
import EasySection from "./Sections/EasySection"
import PointsSection from "./Sections/PointsSection"
import FeaturesSection from "./Sections/FeaturesSection"
import CaseSection from "./Sections/CaseSection"
import EffectiveSection from "./Sections/EffectiveSection"
import AlmightyInquire from "./Sections/AlmightyInquire"

class AlmightydrPage extends React.Component {
  componentDidMount() {
  }

  render() {
    const { classes, ...rest } = this.props

    return (
      <div className={classes.root}>
        <Header
          color="transparent"
          brand="올마이티 닥터"
          logo={logoUrl}
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />

        <ReactFullpage
          //fullpage options
          licenseKey={"20EC16F6-E8624CD0-881BCFE9-F866BC2B"}
          scrollingSpeed={1000} /* Options here */
          navigation
          sectionsColor={[
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#64359a",
            "#FFFFFF",
            "#64359a",
            "#64359a",
          ]}
          responsive={768}
          afterLoad={function(origin, destination, direction) {
            const lightPages = [10, 11, 12]
            if (lightPages.includes(destination.index)) {
              document.body.classList.add("light-page")
            } else {
              document.body.classList.remove("light-page")
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <IntroSection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <ManagementSection fullpageApi={fullpageApi} />
                </div>
                <PointsSection />
                <div className="section">
                  <AnalysisSection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <EasySection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <CaseSection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <FeaturesSection />
                </div>
                <div className="section">
                  <EffectiveSection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <AlmightyInquire />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    )
  }
}

export default withStyles(almightydrPageStyle)(AlmightydrPage)
