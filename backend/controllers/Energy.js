import EnergyModel from '../models/Energy.js'


class EnergyController {

    static getalldoc = async (req, res) => {
        try {
            const result = await EnergyModel.find()
            res.send(result);
            // console.log(result)
        } catch (error) {
            console.log(error)

        }
    }


    static getDataByTopic = async (req, res)=>{
    
            try {
                const value =  ["oil", "gas", "consumption","market", "war","export","production","battery","biofuel","economy","robot","energy","growth","administration","unemployment","trade","economic growth","food","economic growth","tension", "terrorism","transport","vehicle","tourist","industry", "industry", "climate","crisis","policy","ice " ]
                const result  = await EnergyModel.find({topic: {$in :value}} )
                res.send(result)
                console.log(result)
            } catch (error) {   
                console.log(error)
            }
    }

    static getDataBySector = async (req, res)=>{
    
        try {
            const value =  ["Energy", "Environment", "Aerospace & defence","Retail", "Manufacturing","Financial services","Support services","Information Technology","Healthcare","Food & agriculture","Tourism & hospitality","energy","Government","Automotive","Construction","Transport"]
            const result  = await EnergyModel.find({sector: {$in :value}} )
            res.send(result)
            console.log(result)
        } catch (error) {   
            console.log(error)
        }
     }

    // static getdata = async(req, res)=>{
    //     try {
    //         const result = await EnergyModel.find({}, "country")
    //         res.send(result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

     static getDataByEndYear = async (req, res)=>{
        try {
            const value =  
            ["2027", "2025", "2018","2200", "2040","2019","2020","2017","2021","2019","2026","2030","2022","2024","2046","2126","2050","2035","2016","2055","2041","2030","2036","2060","2026","2027"]
            const  result = await EnergyModel.find({end_year: {$in: value}})
            res.send(result)
        } catch (error) {
            console.log(error)
            
        }
     }


     static getDataByRegion = async(req, res)=>{

        try {
            const value = ["Northern America", "World", "Central America", "Eastern Europe", "Western Africa", "Central Africa", "Northern Africa", "Southern Africa", "Western Asia", "Central Asia","Southern Asia", "Europe",  "Eastern Asia", "Central America","Oceania","Asia","South-Eastern Asia","Africa"] 
            const result = await EnergyModel.find({region: {$in: value}})
            res.send(result)
        } catch (error) {
            console.log(error)
        }
     }
       
     static getDataByCountry = async(req, res)=>{

        try {
            const value = ["United States of America", "India", "Saudi Arabia", "China", "Russia", "Colombia","Niger", "Brazil",  "Mali", "Indonesia","Iraq", "Iran", "Libya", "South Sudan", "Venezuela", "Burkina Faso", "Germany",  "Libya", "United Kingdom", "Kuwait", "Egypt",  "Canada", "Argentina",  "Japan",  "Austria", "Estonia", "Nigeria", "Mexico", "Australia",  "Morocco", "Spain", "Greece", "Qatar", "Oman", "Jordan", "South Africa", "Norway", "Brazil",  "Malaysia", "Ghana", "Egypt", "Gabon", "Algeria", "Turkey", "Cyprus", "Poland", ] 

            const result = await EnergyModel.find({country: {$in: value}})
            res.send(result)
        } catch (error) {
            console.log(error)
        }
     }
}

export default EnergyController;


