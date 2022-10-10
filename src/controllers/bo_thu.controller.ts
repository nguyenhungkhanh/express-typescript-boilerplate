import { Request, Response } from 'express'
import BoThu from "../models/bo_thu.model";

const getAll = async (request: Request, response: Response) => {
    try {
        const items = await BoThu.find({}).exec();

        return response.status(200).json({ data: items })
    } catch (error) {
        return response.status(500).json({ status: 500 })
    }
}

const create = (request: Request, response: Response) => {
    const newBoThu = new BoThu(request.body);

    newBoThu.save((error) => {
        if (error) {
            console.log(error)
            return response.status(500).json({ status: 500 })
        };
        return response.status(200).json({ status: 200, data: newBoThu })
    });
}

const getById = async (request: Request, response: Response) => {
    try {
        const item = await BoThu.findById(request.params.id).exec();

        return response.status(200).json({ data: item, status: 200 })
    } catch (error) {
        return response.status(500).json({ status: 500 })
    }
}

const updateById = async (request: Request, response: Response) => {
    try {
        await BoThu.findByIdAndUpdate(request.params.id, request.body).exec();

        return response.status(200).json({ status: 200 })
    } catch (error) {
        return response.status(500).json({ status: 500 })
    }
}

const deleteById = async (request: Request, response: Response) => {
    try {
        await BoThu.findByIdAndRemove(request.params.id).exec();

        return response.status(200).json({ status: 200 })
    } catch (error) {
        return response.status(500).json({ status: 500 })
    }
}

export default {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}