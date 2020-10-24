const { Router } = require("express");
const router = Router();

const {
  allAlbumsGet,
  oneAlbumGet,
  randomAlbumGet,
} = require("../controllers/controller");

router.get("/allAlbums", allAlbumsGet);
router.get("/oneAlbum/:id", oneAlbumGet);
router.get("/randomAlbum", randomAlbumGet);

module.exports = router;
