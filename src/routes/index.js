const { Router } = require("express");
const router = Router();

const {
  allAlbumsGet,
  oneAlbumGet,
  randomAlbumGet,
  homeGet
} = require("../controllers/controller");

router.get("/", homeGet);
router.get("/api/allAlbums", allAlbumsGet);
router.get("/api/oneAlbum/:id", oneAlbumGet);
router.get("/api/randomAlbum", randomAlbumGet);

module.exports = router;
