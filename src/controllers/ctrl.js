import Task from "../database/model/taskModel";

export const findAllTasks = async(req,res,next)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks)
    }
    catch (error){
        res.status(500).json({
            message: error.message || "Something goes wrong GETTING ALL tasks"
        })
    }
}

export const findDoneTasks = async(req,res,next)=>{
    try{
        const tasks = await Task.find({done:true});
        res.json(tasks)
    }
    catch (error){
        res.status(500).json({
            message: error.message || "Something goes wrong GETTING DONE tasks"
        })
    }
}

export const findOneTask = async(req,res,next)=>{

    let id = req.params.id;

    try{
        const task = await Task.findById(req.params.id);

        if(!task)
            return res.status(404).json({message:`Task id ${id} does not exists`})
        res.json(task)
    }
    catch (error){
        res.status(500).json({
            message: error.message || `Something goes wrong GETTING ONE task ${id}`
        })
    }
}

export const  deleteOneTask= async(req,res,next)=>{
    
    let id = req.params.id;

    try{
        const tasks = await Task.findByIdAndDelete(id);
        res.json(tasks)
    }
    catch (error){
        res.status(500).json({
            message: error.message || "Something goes wrong DELETING ONE task"
        })
    }
}

export const  updateOneTask= async(req,res,next)=>{

    let id = req.params.id;

    try{
        const task = await Task.findByIdAndUpdate(id, req.body);
        res.send('Task Updated!')
    }
    catch (error){
        res.status(500).json({
            message: error.message || "Something goes wrong UPDATING one tasks"
        })
    }
}

export const postRoute = async(req,res) =>{
    if (!req.body.title){
        return res.status(400).send({message:"Not title founded"})
    }
    try{
        const newTask =  new Task(
            {
                title: req.body.title, 
                description:req.body.description,
                done: req.body.done ? req.body.done : false
            })
        await newTask.save();
        res.json(newTask)
    }
    catch (error){
        res.status(500).json({
            message: error.message || "Something goes wrong CREATING ONE task"
        })
    }
    
}