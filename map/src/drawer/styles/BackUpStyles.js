import {makeStyles} from "@material-ui/core/styles";

const backUpStyles = makeStyles({
    info: {
        '& .MuiListItemIcon-root': {
            minWidth: 'auto !important',
        },
    },
    nameInput: {
        maxWidth: 450,
        fontFamily: "Arial",
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        borderColor: '#bebdb4',
        backgroundColor: 'transparent',
        outlineColor: "#757575",
        cursor: 'pointer',
        '&[disabled]': {
            border: 'none'
        },
        marginBottom: -10,
        paddingBottom: '8px',
        paddingTop: '8px'

    },
    favouriteLineInfo: {
        maxWidth: "450px !important",
        width: "450px !important",
        resize: "none",
        fontFamily: "Arial",
        color: 'black',
        fontSize: 20,
        marginLeft: -2,
        borderColor: '#bebdb4',
        backgroundColor: 'transparent',
        outlineColor: "#757575",
        cursor: 'pointer',
        '&[disabled]': {
            border: 'none'
        },
        marginBottom: -10,
        paddingBottom: '8px',
        paddingTop: '8px'
    },
    name: {
        fontFamily: "Arial",
        fontSize: 20,
        color: 'black',
        outline: 'none',
        letterSpacing: "normal",
        paddingBottom: '2px',
        lineHeight: "normal",
        overflowWrap: 'break-word'
    },

    item: {
        '& .MuiMenuItem-root': {
            userSelect: 'text'
        },
        '& .MuiTypography-root': {
            marginLeft: "1px !important"
        }
    },
    dialog: {
        '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '600px'
        },
    }
})

export default backUpStyles;