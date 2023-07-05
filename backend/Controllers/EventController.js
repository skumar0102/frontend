import Event from '../Models/Event.js';

async function createEvent(req,res){
    try {
        let {title,description,startdate,enddate} = req.body;
        let result = await Event.create({title,description,startdate,enddate});
        res.status(201).send({success:true,result});
        

    } catch (error) {
         res.status(400).send(error.message);
    }
}

async function getEvents(req, res) {
    try {
      let result = await Event.find();
      res.status(200).send({ result });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }



export {createEvent,getEvents}