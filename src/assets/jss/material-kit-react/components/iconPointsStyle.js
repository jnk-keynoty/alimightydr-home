const iconPointsStyle = theme => ({
    pointContainer : {
        width: "140px",
        textAlign: "center",
        wordBreak: "keep-all",
        '& h4': {
            fontWeight: "bold",
        },
        color: props => props.color,
    },
    iconContainer : {
        borderRadius: "50%",
        borderWidth: "1px",
        borderStyle: "solid",
        color: props => props.iconColor,
        borderColor: props => props.iconColor,
        lineHeight: "1em",
    },
    [theme.breakpoints.down(768)]: {
        pointContainer : {
            width: "100%",
            '& h4': {
                fontSize: "16px",
                textAlign: "left"
            }
        },
        iconContainer : {
            padding: "10px",
            width: "80px",
            height: "80px",
            marginRight: "10px",
            fontSize: "60px",
        },    
    },
    [theme.breakpoints.up(768)]: {
        pointContainer : {
            width: "100px",
            margin: "0 10px",
            '& h4': {
                fontSize: "16px",
            }
        },
        iconContainer : {
            padding: "15px",
            height: "100px",
            fontSize: "70px",
        },    
    },
    [theme.breakpoints.up(992)]: {
        pointContainer : {
            width: "140px",
            margin: "0 20px",
            '& h4': {
                fontSize: "18px",
            }
        },
        iconContainer : {
            padding: "22px",
            height: "140px",
            fontSize: "96px",
        },    
    },

})

export default iconPointsStyle;