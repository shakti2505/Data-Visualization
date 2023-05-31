import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar,
  BarChart
} from "recharts";

import { useSearchParams } from "react-router-dom";

const ChartBySector = () => {
  // extracting the query parameter from the user input
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("sector");
  // console.log(query)

  const handleSerch = (e) => {
    // to stop page reloading when hit search button
    e.preventDefault();
  };
  const [sector, setSector] = useState([]);
//   console.log("Array of object " , sector)

 //Filtering object as per topic searched 
  const filteredData = sector.filter(obj=>obj.sector===query)
  console.log("Filtered data: ",filteredData)

  useEffect(() => {
    console.log("USe effect called");
    async function getallsector() {
      try {
        //fetching data from the API using axios
        const sector = await axios.get("http://127.0.0.1:8000/api/sector");
        // setting data in the state value
        setSector(sector.data); 
      } catch (error) {
        console.log(error);
      }
    }
    getallsector();
  }, []);

  return (
    <>
      {/* <h1 className="Chart-heading">Sector Chart</h1>    
      <form onSubmit={handleSerch}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search by Sector"
          onChange={(e) => {
            setSearchParams({ sector: e.target.value });
          }}
          
        />

        <br /> 

        <p className="example"> You can try: Energy, Environment, Aerospace & defence, Retail, Manufacturing, Financial services</p> 

        <br />
        <input type="submit" value="search" />
       
      </form> */}
      
      <h1 className="Chart-heading"> Line Chart By Sector</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Search by Topic" onSubmit={handleSerch} onChange={(e) => {
          setSearchParams({ sector: e.target.value });
        }} />
        <label htmlFor="floatingInput"><p className="example"> You can search sector: Energy, Environment, Aerospace & defence, Retail, Manufacturing, Financial services</p> 

</label>
      </div>


      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          data={filteredData}
          width={200}
          height={400}
          margin={{ top: 20, right: 10, bottom: 10, left: 10 }}
          style={{
            borderRadius: "20px",
            border: "2px solid black",
            marginTop: "50px",
            width: "100%",
          }}
        >
          <CartesianGrid style={{ opacity: "0.1" }} />
          <XAxis dataKey="topic" interval={"preserveStartEnd"} />
          <YAxis dataKey="relevance"/>
          <Tooltip
            contentStyle={{ backgroundColor: "black", opacity: "0.8" }}
          />
          <Legend />
          <Line
            type="monotone"
            strokeWidth={5}
            dataKey="intensity"
            stroke="#9900ff"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            strokeWidth={5}
            dataKey="relevance"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <h1 className="Chart-heading"> Bar Chart By Sector</h1>

      <ResponsiveContainer width="100%" height="100%"  aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{
            borderRadius: "20px",
            border: "2px solid black",
            marginTop: "50px",
            width: "100%",
          }}
        >
          <CartesianGrid opacity="0.1" />
          <XAxis dataKey="topic" />
          <YAxis dataKey="intensity" />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" />
          <Bar dataKey="relevance" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    </>
  );
};

export default ChartBySector;
