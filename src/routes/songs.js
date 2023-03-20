import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import songsController from '../controllers/songsController';

export default () => {
    const api = Router();

    api.get('/:slug', catchAsync(songsController.findOne));

    api.get('/', catchAsync(songsController.findAll));

    api.post('/', catchAsync(songsController.create));

    api.put('/:slug', catchAsync(songsController.update));

    api.delete('/:slug', catchAsync(songsController.remove));

    return api;
}