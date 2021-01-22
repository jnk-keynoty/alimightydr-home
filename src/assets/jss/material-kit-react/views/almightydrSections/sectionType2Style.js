import { container } from "assets/jss/material-kit-react.js";

const sectionType2Style = theme => ({
  container,
  topText: {
    color: props => props.data.topTextColor,
    },
  [theme.breakpoints.down(768)]: {
    fullHeight: {
        height: "auto",
        minHeight: "100%",
        position: "relative",
    },
    topRow: {
        height: "auto",
    },
    bottomRow: {
        height: "auto",
    },
    topText: {
        padding: "30px",
        margin: "60px 0 30px",
        backgroundColor: "rgba(0,0,0,.6)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
    },
    bottomLists: {
        padding: "30px 0"
    },
    bottomList: {
        width: "100%",
        margin: "5px 0"
    },
    companyName: {
        width: "100%",
        textAlign: "right",
        margin: "10px 0"
    }
},
[theme.breakpoints.up(768)]: {
    fullHeight: {
        height: "100%",
        position: "relative",
    },
    topRow: {
        height: "70%",
    },
    topText: {
        padding: "30px",
        backgroundColor: "rgba(0,0,0,.6)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
    },
    bottomRow: {
        height: "30%",
    },
    companyName: {
        position: "absolute",
        left: "0px",
        bottom: "30px",
    },    
},
[theme.breakpoints.up(992)]: {
    topRow: {
        height: "calc(100% - 300px)",
    },
    bottomRow: {
        height: "300px",
    },
}
});

export default sectionType2Style;
