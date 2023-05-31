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
  BarChart,
} from "recharts";

import { useSearchParams } from "react-router-dom";

const ChartByEndyear = () => {
  // extracting the query parameter from the user input
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("end_year");
  // console.log(query)

  const handleSerch = (e) => {
    // to stop page reloading when hit search button
    e.preventDefault();
  };
  const [end_year, setEnd_year] = useState([]);
//   console.log("Array of object " , sector)

 //Filtering object as per topic searched 
  const filteredData = end_year.filter(obj=>obj.end_year===query)
  console.log("Filtered data: ",filteredData)

  useEffect(() => {
    console.log("USe effect called");
    async function getallsector() {
      try {
        //fetching data from the API using axios
        const end_year = await axios.get("http://127.0.0.1:8000/api/endyear");
        // setting data in the state value
        setEnd_year(end_year.data); 
      } catch (error) {
        console.log(error);
      }
    }
    getallsector();
  }, []);

  return (
    <>
      {/* <h1 className="Chart-heading">End Year  Chart</h1>    
      <form onSubmit={handleSerch}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search by End year "
          onChange={(e) => {
            setSearchParams({ end_year: e.target.value });
          }}
          
        />

        <br /> 

        <p className="example"> You can try year: 2017, 2018, 2022, 2200, 2040, 2035</p> 

        <br />
        <input type="submit" value="search" />
      </form> */}

      <h1 className="Chart-heading"> Line Chart By End year</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Search by Topic" onSubmit={handleSerch} onChange={(e) => {
          setSearchParams({ end_year: e.target.value });
        }} />
        <label htmlFor="floatingInput"> <p className="example"> You can try search years : 2017, 2018, 2022, 2200, 2040, 2035 etc.</p> 
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
      <h1 className="Chart-heading"> Bar Chart By End Year</h1>

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
        >
          <CartesianGrid opacity="0.1" />
          <XAxis dataKey="region" />
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

export default ChartByEndyear;
