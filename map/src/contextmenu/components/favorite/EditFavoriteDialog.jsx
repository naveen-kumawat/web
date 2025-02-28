import {Dialog} from "@material-ui/core";
import {Button, Grid, IconButton} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useContext, useEffect, useState} from "react";
import contextMenuStyles from "../../styles/ContextMenuStyles";
import AppContext from "../../../context/AppContext";
import DeleteFavoriteDialog from "./DeleteFavoriteDialog";
import {Close} from "@mui/icons-material";
import FavoriteName from "./structure/FavoriteName";
import FavoriteAddress from "./structure/FavoriteAddress";
import FavoriteDescription from "./structure/FavoriteDescription";
import FavoriteGroup from "./structure/FavoriteGroup";
import FavoriteIcon from "./structure/FavoriteIcon";
import FavoriteColor from "./structure/FavoriteColor";
import FavoriteShape from "./structure/FavoriteShape";
import FavoritesManager from "../../../context/FavoritesManager";
import FavoriteHelper from "./FavoriteHelper";

export default function EditFavoriteDialog({
                                               favorite, editFavoritesDialogOpen, setEditFavoritesDialogOpen,
                                               deleteFavoritesDialogOpen, setDeleteFavoritesDialogOpen
                                           }) {

    const menuStyles = contextMenuStyles();
    const ctx = useContext(AppContext);

    const [favoriteName, setFavoriteName] = useState(favorite.name);
    const [favoriteAddress, setFavoriteAddress] = useState(favorite.address);
    const [favoriteDescription, setFavoriteDescription] = useState(favorite.desc);
    const [favoriteGroup, setFavoriteGroup] = useState(null);
    const [favoriteColor, setFavoriteColor] = useState(favorite.color);
    const [favoriteShape, setFavoriteShape] = useState(favorite.background);
    const [favoriteIcon, setFavoriteIcon] = useState(favorite.icon);
    const [favoriteIconCategories, setFavoriteIconCategories] = useState(null);
    const [currentIconCategories, setCurrentIconCategories] = useState(null);
    const [errorName, setErrorName] = useState(false);

    const toggleDeleteFavoritesDialogOpen = () => {
        setDeleteFavoritesDialogOpen(!deleteFavoritesDialogOpen);
    };

    useEffect(() => {
        getIconCategories().then();
    }, [editFavoritesDialogOpen]);

    async function getIconCategories() {
        let resp = await fetch(FavoritesManager.FAVORITE_GROUP_FOLDER)
        const res = await resp.json();
        if (res) {
            Object.entries(res.categories).forEach(category => {
                let currentIcon = category[1].icons.find(icon => icon === favorite.icon);
                if (currentIcon) {
                    setCurrentIconCategories(category[0]);
                }
            })
            setFavoriteIconCategories(res);
        }
    }

    async function save() {
        if (ctx.addFavorite.editTrack) {
            saveTrackWpt();
        } else {
            await saveFavorite();
        }
    }

    function saveTrackWpt() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let currentWpt = getCurrentWpt(selectedGroupName);
        let ind = ctx.selectedGpxFile.wpts.findIndex(wpt => wpt === currentWpt);
        if (ind !== -1) {
            let selectedGroup = FavoritesManager.createDefaultWptGroup(favoriteGroup);
            ctx.selectedGpxFile.wpts[ind] = {
                name: favoriteName,
                address: favoriteAddress === "" ? null : favoriteAddress,
                desc: favoriteDescription === "" ? null : favoriteDescription,
                color: favoriteColor,
                background: favoriteShape,
                icon: favoriteIcon,
                category: getCategoryName(selectedGroup),
                lat: favorite.lat,
                lon: favorite.lon
            }
        }

        ctx.selectedGpxFile.updateLayers = true;
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        ctx.setPointContextMenu({});
        setEditFavoritesDialogOpen(false);
    }

    function getCategoryName(selectedGroup) {
        return selectedGroup.name !== FavoritesManager.DEFAULT_GROUP_NAME ? selectedGroup.name : null;
    }

    async function saveFavorite() {
        let selectedGroupName = favoriteGroup === null ? favorite.category : favoriteGroup.name;
        let currentWpt = getCurrentWpt(selectedGroupName);
        let ind = ctx.selectedGpxFile.file.wpts.findIndex(wpt => wpt === currentWpt);
        let newGroup = ctx.favorites.groups.find(g => g.name === selectedGroupName);
        let result = await FavoritesManager.updateFavorite(
            currentWpt,
            ctx.selectedGpxFile.name,
            ctx.selectedGpxFile.file.name,
            newGroup.file.name,
            ctx.favorites[ctx.selectedGpxFile.nameGroup].updatetimems,
            newGroup.updatetimems,
            ind)
        if (result) {
            updateFavoriteGroups(result, selectedGroupName);
            setEditFavoritesDialogOpen(false);
        }
    }

    function updateFavoriteGroups(result, selectedGroupName) {
        ctx.favorites.groups = FavoriteHelper.updateGroupAfterChange(ctx, result, selectedGroupName)
        let selectedGroup = ctx.favorites.groups.find(g => g.name === selectedGroupName);

        if (result.oldGroupResp) {
            ctx.favorites[ctx.selectedGpxFile.nameGroup] = FavoriteHelper.updateGroupObj(ctx.favorites[ctx.selectedGpxFile.nameGroup], result.oldGroupResp);
        }

        if (!ctx.favorites[selectedGroupName]) {
            ctx.favorites[selectedGroupName] = FavoriteHelper.createGroupObj(result.newGroupResp, selectedGroup);
        } else {
            ctx.favorites[selectedGroupName] = FavoriteHelper.updateGroupObj(ctx.favorites[selectedGroupName], result.newGroupResp);
        }
        FavoriteHelper.updateSelectedFile(ctx, ctx.favorites, null, favoriteName, selectedGroupName, false);
        ctx.setFavorites({...ctx.favorites});
    }

    function getCurrentWpt(selectedGroupName) {
        let res = null;
        let wpts = ctx.selectedGpxFile.file ? ctx.selectedGpxFile.file.wpts : ctx.selectedGpxFile.wpts;
        wpts.forEach(wpt => {
            if (wpt.name === favorite.name) {
                wpt.name = favoriteName;
                wpt.address = getAddress();
                wpt.desc = getDescription();
                wpt.color = favoriteColor;
                wpt.background = favoriteShape;
                wpt.icon = favoriteIcon;
                wpt.category = getCategory(selectedGroupName);
                res = wpt;
            }
        })
        return res;
    }

    function getCategory(name) {
        return name !== FavoritesManager.DEFAULT_GROUP_NAME ? name : null;
    }

    function getAddress() {
        return favoriteAddress === "" ? null : favoriteAddress;
    }

    function getDescription() {
        return favoriteDescription === "" ? null : favoriteDescription;
    }

    const CloseDialog = (dialogOpen) => {
        return <IconButton
            variant="contained"
            type="button"
            onClick={() => dialogOpen(false)}
        >
            <Close fontSize="small"/>
        </IconButton>
    }

    return (
        <Dialog open={true}>
            <Grid container spacing={2}>
                <Grid className={menuStyles.name} item xs={11} sx={{mb: -3}}>
                    <DialogTitle>Edit favorite</DialogTitle>
                </Grid>
                <Grid item xs={1} sx={{ml: -2, mt: 1}}>
                    {CloseDialog(setEditFavoritesDialogOpen)}
                </Grid>
            </Grid>
            <DialogContent>
                <FavoriteName favoriteName={favoriteName}
                              setFavoriteName={setFavoriteName}
                              favoriteGroup={favoriteGroup}
                              favorite={favorite}
                              setErrorName={setErrorName}/>
                <FavoriteAddress favoriteAddress={favoriteAddress}
                                 setFavoriteAddress={setFavoriteAddress}
                                 setClose={null}/>
                <FavoriteDescription favoriteDescription={favoriteDescription}
                                     setFavoriteDescription={setFavoriteDescription}
                                     setClose={null}/>
                {!ctx.addFavorite.editTrack && <FavoriteGroup favoriteGroup={favoriteGroup}
                                                              setFavoriteGroup={setFavoriteGroup}
                                                              groups={ctx.favorites.groups}
                                                              defaultGroup={favorite.category}/>}
                {ctx.addFavorite.editTrack && <FavoriteGroup favoriteGroup={favoriteGroup}
                                                             setFavoriteGroup={setFavoriteGroup}
                                                             groups={ctx.selectedGpxFile.pointsGroups}
                                                             defaultGroup={favorite.category}/>}
                <FavoriteIcon favoriteIcon={favoriteIcon}
                              setFavoriteIcon={setFavoriteIcon}
                              currentIconCategories={currentIconCategories}
                              favoriteIconCategories={favoriteIconCategories}
                              selectedGpxFile={ctx.selectedGpxFile}
                              add={false}
                              defaultIcon={favorite.icon}/>
                <FavoriteColor favoriteColor={favoriteColor}
                               setFavoriteColor={setFavoriteColor}
                               defaultColor={favorite.color}/>
                <FavoriteShape color={favoriteColor}
                               favoriteShape={favoriteShape}
                               setFavoriteShape={setFavoriteShape}
                               defaultBackground={favorite.background}/>
            </DialogContent>
            <DialogActions>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Button sx={{marginLeft: "auto"}} onClick={toggleDeleteFavoritesDialogOpen}>
                            Delete</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => setEditFavoritesDialogOpen(false)}>
                            Cancel</Button>
                    </Grid>
                    <Grid item xs={2}>
                        {deleteFavoritesDialogOpen
                            && <DeleteFavoriteDialog
                                dialogOpen={deleteFavoritesDialogOpen}
                                setDialogOpen={setDeleteFavoritesDialogOpen}/>}
                        <Button disabled={errorName} onClick={() => save()}>
                            Save</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}