import {Box, Button, Divider, Grid, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Folder, LocationOn} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import MarkerOptions from "../../../map/markers/MarkerOptions";
import {makeStyles} from "@material-ui/core/styles";
import EditFavoriteDialog from "../EditFavoriteDialog";
import DeleteFavoriteDialog from "../DeleteFavoriteDialog";
import TracksManager from "../../../context/TracksManager";

const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '28px',
            left: '542px',
            width: '40px',
            height: '40px'
        },
        "& .background": {
            left: '-25px',
            top: '-25px',
            width: '100px',
            height: '100px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    }
})

const FavoriteInfoTab = ({width}) => {

    const styles = contextMenuStyles();
    const classes = useStyles();
    const ctx = useContext(AppContext);

    const toggleEditFavoritesDialogOpen = () => {
        setEditFavoritesDialogOpen(!editFavoritesDialogOpen);
    };
    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!editFavoritesDialogOpen);
    };
    const toggleDescriptionOpen = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const [favorite, setFavorite] = useState({});
    const [editFavoritesDialogOpen, setEditFavoritesDialogOpen] = useState(false);
    const [deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen] = useState(false);
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    useEffect(() => {
        if (ctx.selectedGpxFile.saveFavorite) {
            TracksManager.saveTrack(ctx, ctx.selectedGpxFile.file.name, ctx.selectedGpxFile.name, TracksManager.FAVORITE_FILE_TYPE);
        } else if (ctx.selectedGpxFile.markerCurrent) {
            let markerName = ctx.selectedGpxFile.markerCurrent.title;
            let wpt = ctx.selectedGpxFile.file.wpts.find(wpt => wpt.name === markerName);
            if (wpt) {
                setFavorite(
                    {
                        name: wpt.name,
                        desc: wpt.desc === 'null' ? "" : wpt.desc,
                        comment: wpt.ext.comment,
                        address: wpt.address === 'null' ? "" : wpt.address,
                        category: wpt.ext.category,
                        background: wpt.ext.extensions.background,
                        color: wpt.ext.extensions.color,
                        icon: wpt.ext.extensions.icon,
                        lat: wpt.ext.lat,
                        lon: wpt.ext.lon,
                        time: wpt.ext.time,
                        marker: wpt.ext
                    })
            }
        }
    }, [ctx.selectedGpxFile])


    return (<Box className={styles.item} width={width}>
        <Typography className={styles.info} variant="subtitle1" color="inherit">
            <Grid container spacing={2}>
                <Grid className={styles.name} item xs={10}>
                    <Typography className={styles.name} variant="inherit">
                        {favorite.name}
                    </Typography>
                </Grid>
                {favorite?.marker && <Grid className={styles.name} item xs={2}>
                    <div className={classes.icon}
                         dangerouslySetInnerHTML={{__html: MarkerOptions.getWptIcon(favorite?.marker).options.html + ''}}/>
                </Grid>}
            </Grid>
            <Grid container sx={{mt: -9}}>
                <ListItemIcon style={{color: favorite.color}}>
                    <Folder fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{mt: -1}} variant="inherit" noWrap>
                        {favorite.category ? favorite.category : "Favorites"}
                    </Typography>
                </ListItemText>
            </Grid>
            {favorite.desc && favorite.desc !== "" && <ListItemText>
                <Typography component={'span'} variant="inherit">
                    {descriptionOpen ? favorite.desc : favorite.desc.substring(0, 140)}
                    {favorite.desc.length > 70 && <ListItemIcon onClick={toggleDescriptionOpen}>
                        {descriptionOpen ? "...less" : "...more"}
                    </ListItemIcon>}
                </Typography>
                <Divider light/>
            </ListItemText>}
            {favorite.address && favorite.address !== "" && <Grid container>
                <ListItemIcon>
                    <LocationOn fontSize="small"/>
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{mt: -0.5}} noWrap>
                        {favorite.address}
                    </Typography>
                </ListItemText>
            </Grid>
            }
        </Typography>
        <Button variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                onClick={toggleEditFavoritesDialogOpen}>Edit</Button>
        {editFavoritesDialogOpen && <EditFavoriteDialog
            favorite={favorite}
            setEditFavoritesDialogOpen={setEditFavoritesDialogOpen}/>}
        <Button sx={{ml: 2}} variant="contained" component="span" style={{backgroundColor: '#fbc73a'}}
                onClick={toggleDeleteFavoritesDialogOpen}>Delete</Button>
        {deleteFavoritesDialogOpen && <DeleteFavoriteDialog/>}
    </Box>);
}

export default FavoriteInfoTab;