import express from 'express';
import EnergyModel from '../models/Energy.js';
import EnergyController from '../controllers/Energy.js';


const router = express.Router()

router.get('/all', EnergyController.getalldoc);
router.get('/topic', EnergyController.getDataByTopic)
router.get('/sector', EnergyController.getDataBySector) 
router.get('/endyear', EnergyController.getDataByEndYear) 
router.get('/region', EnergyController.getDataByRegion) 
router.get('/country', EnergyController.getDataByCountry) 


export default router;
