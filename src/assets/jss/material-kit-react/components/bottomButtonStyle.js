const bottomButtonStyle = theme => ({
    root: {
        position: "absolute",
        bottom: "50px",
        left: 0,
        right: 0,
        textAlign: "center",
      },
      [theme.breakpoints.down(768)]: {
        root: {
          bottom: "20px"
        }
      }

})

export default bottomButtonStyle;