import Movie from '../models/movie.model';

/**
 * Load movie and append to req
 */
function load(req, res, next, id) {
    Movie.get(id)
        .then((movie) => {
            req.movie = movie;
            return next();
        }).catch(e => next(e));
}


/**
 * Get movie
 * @returns {Movie}
 */
function get(req, res) {
    return res.json(req.movie);
}

/**
 * Create new movie
 * @property {string} req.body.title        - The title of the movie
 * @property {string} req.body.image        - The image url of the movie
 * @property {string} req.body.description  - The description of the movie
 * @returns {Movie}
 */
function create(req, res, next) {
    const movie = new Movie ({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    });

    movie.save()
        .then(savedMovie => res.json(savedMovie))
        .catch(e => next(e));
}

/**
 * Update existing movie
 * @property {string} req.body.title        - The title of the movie
 * @property {string} req.body.image        - The image url of the movie
 * @property {string} req.body.description  - The description of the movie
 * @returns {Movie}
 */
function update(req, res, next) {
    const movie = req.movie;
    movie.title = req.body.title;
    movie.image = req.body.image;
    movie.description = req.body.description;

    user.save()
        .then(savedMovie => res.json(savedMovie))
        .catch(e => next(e));    
}

/**
 * Get movie list
 * @returns {Movie[]}
 */
function list(req, res, next) {
    const {limit = 10, skip = 0} = req.query;
    Movie.list({limit, skip})
        .then(movies => res.json(movies))
        .catch(e => next(e));
}

/**
 * Delete Movie
 * @returns {Movie}
 */
function remove(req, res, next) {
    const movie = req.movie;
    movie.remove()
        .then(deletedMovie => res.json(deletedMovie))
        .catch(e = next(e));
}

export default {load, get, create, update, list, remove};