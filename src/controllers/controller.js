const album = require("../models/Album");

exports.homeGet = async (req, res) => {
  res.send("<h2>REST Base url: https://rickandmortyapi.com/api/ The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.</h2>");
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
