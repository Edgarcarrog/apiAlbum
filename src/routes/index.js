const { Router } = require("express");
const router = Router();

const {
  allAlbumsGet,
  oneAlbumGet,
  randomAlbumGet,
  homeGet
} = require("../controllers/controller");

router.get("/", homeGet);
router.get("/allAlbums", allAlbumsGet);
router.get("/oneAlbum/:id", oneAlbumGet);
router.get("/randomAlbum", randomAlbumGet);

module.exports = router;
