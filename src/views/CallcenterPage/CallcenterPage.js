import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
// import theme from "../../theme"
// import { ThemeProvider } from "@material-ui/core/styles"

import Header from "components/HeaderA/Header.js"
import HeaderLinks from "components/HeaderA/HeaderLinks.js"
import ReactFullpage from "@fullpage/react-fullpage"

import callcenterPageStyle from "assets/jss/material-kit-react/views/callcenterPage.js"

import logoUrl from "../../assets/ico/logo.svg"
import IntroSection from "./Sections/IntroSection"
import BestSection from "./Sections/BestSection"
import PointsSection from "./Sections/PointsSection"
import CallcenterInquire from "./Sections/CallcenterInquire"

class CallcenterPage extends React.Component {
  componentDidMount() {
    const buttonToLast = document.querySelector("#toLastpage")
    const indexOfLastpage = document.querySelectorAll(".section").length
    buttonToLast.onclick = () => {
      window.fullpage_api.silentMoveTo(indexOfLastpage)
    }
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
            "#FFEF81",
            "#FFEF81",
            "#FFEF81",
            "#FFEF81",
            "#FFEF81",
            "#FFEF81",
          ]}
          responsive={768}
          afterLoad={function(origin, destination, direction) {
            const lightPages = [0, 1, 5]
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
                  <IntroSection fullpageApi={fullpageApi}/>
                </div>
                <div className="section">
                  <BestSection fullpageApi={fullpageApi}/>
                </div>
                <PointsSection />
                <div className="section">
                  <CallcenterInquire />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    )
  }
}

export default withStyles(callcenterPageStyle)(CallcenterPage)
