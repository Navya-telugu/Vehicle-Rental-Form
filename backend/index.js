const express=require("express")
var cors = require('cors');
require("dotenv").config();
const port =8001;
const app=express()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.listen(port, ()=>{
    console.log("server starting on port "+ port)
})


const router = express.Router();
const { VehicleModel } = require("../backend/components/connection/connection");


router.get("api/vehicleModels", async (req, res) => {
  try {
    
    const vehicleModels = await VehicleModel.findAll();
    
    res.json(vehicleModels);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
app.use('/', router);

module.exports = router;
