import axios from "axios";

export default {
  // Gets all books
  getEpisode: function() {
    return axios.get("/api/episode");
  },
  // Gets the book with the given id
  getEpisode: function(id) {
    return axios.get("/api/episode/" + id);
  },
  // Deletes the book with the given id
  deleteEpisode: function(id) {
    return axios.delete("/api/episode/" + id);
  },
  // Saves a book to the database
  saveEpisode: function(bookData) {
    return axios.post("/api/episode", episodeData);
  }
};
