// TODO: organize json payload in CRUD

import express from "express";

import RoomModel from '../models/room';

const roomRoutes = express.Router();

//Post Method
roomRoutes.post('/post', async(req, res) => {
    const data = new RoomModel({
        name: req.query.name,
    });

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    }
    catch (error: any) {
        res.status(400).json({message: error.message});
    }
});

//Get all Method
roomRoutes.get('/getAll', async (req, res) => {
    try{
        const data = await RoomModel.find();
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({ message: error.message })
    }
});

//Get by ID Method
roomRoutes.get('/getOne/:id', async (req, res) => {
    try{
        const data = await RoomModel.findById(req.params.id);
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({message: error.message})
    }
});

//Update by ID Method
roomRoutes.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.query;
        const options = { new: true };

        const result = await RoomModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

//Delete by ID Method
roomRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await RoomModel.findByIdAndDelete(id)
        res.send(data)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

export default roomRoutes;