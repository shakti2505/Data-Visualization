import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid,Legend, Tooltip, BarChart, Bar} from 'recharts';




const Chart = () => {
  const [energies, setEnergies] = useState([]);
  console.log(energies)

  useEffect(()=>{
    async function getallenergy(){
      try {
        //fetching data from the API using axios
        const energies = await axios.get("http://127.0.0.1:8000/api/all");
        console.log(energies.data)
        // setting data in the state value
        setEnergies(energies.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getallenergy();
  }, []);


  return (
   <>
  <h1 className='Chart-heading'>Line Chart</h1>
  <ResponsiveContainer width="100%" aspect={4}>
    <LineChart data={energies} width={200} height={400} margin={{top:20, right:10, bottom:10 ,left:10}} 
    style={{
        borderRadius:"20px", 
        border:"2px solid black",
        marginTop:"50px",
        width:"100%"
       }}>
    <CartesianGrid style={{opacity:"0.1"}} />
    <XAxis dataKey="topic" interval={'preserveStartEnd'}/>
    <YAxis dataKey=""/>
    <Tooltip contentStyle={{backgroundColor:'black', opacity:"0.8"}}/>
    <Legend />
    <Line type="monotone" strokeWidth={5} dataKey="intensity" stroke="#9900ff" activeDot={{r:8}}/>
    <Line type="monotone" strokeWidth={5} dataKey="relevance" stroke='green'  activeDot={{r:8}}/>
    </LineChart>
  </ResponsiveContainer>

  <h2 className='Chart-heading'>Bar-Chart</h2>
    <ResponsiveContainer width="100%" height="100%" aspect={4}>
        <BarChart
          width={500}
          height={300}
          data={energies}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          
        
          }}
         barGap="10%"
         style={{
          borderRadius:"20px", 
          border:"2px solid black",
          marginTop:"50px",
          width:"100%"
         }}
         
         >
          <CartesianGrid strokeDasharray="3 3"  style={{opacity:"0.1"}}/>
          <XAxis dataKey="country" />
          <YAxis dataKey="" />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" barRadius={10}/>
          <Bar dataKey="relevance" fill="#82ca9d"/>
        </BarChart>
      </ResponsiveContainer>     
    </>


   
  )
}

export default Chart;
