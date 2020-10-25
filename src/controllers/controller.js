const album = require("../models/Album");

exports.homeGet = async (req, res) => {
  const api ={
    albums: "https://apialbums-ecg.herokuapp.com/api/allAlbums",
    randomAlbum: "https://apialbums-ecg.herokuapp.com/api/randomAlbum"
    };
  res.json(api);
};

exports.allAlbumsGet = async (req, res) => {
  const albums = await album.find({});
  res.json(albums);
};

exports.oneAlbumGet = async (req, res) => {
  const { id } = req.params;
  const oneAlbum = await album.findById(id);
  res.json(oneAlbum);
};

exports.randomAlbumGet = async (req, res) => {
  const albums = await album.find({});
  const numRandom = Math.floor(Math.random() * albums.length);
  res.json(albums[numRandom]);
};
