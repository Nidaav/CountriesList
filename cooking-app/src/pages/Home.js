import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

  const [homeData, setHomeData] = useState([]);

  const getData = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=tomato').then((res) => setHomeData(res.data));
    console.log(getData)
  };

  useEffect(() => getData(), []);

  return (
    <div className='home-container'>
      <h1>React Cook</h1>
      <ul>
        {/* {homeData.sort((a, b) => b.strMeal - a.strMeal).map((card) => ( <Card key={card.id} /> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Home;
