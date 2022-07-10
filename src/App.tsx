import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from './component/Card';
import type { Coffee } from './types/coffee';
import axios from 'axios';

const App = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const getCoffee = async () => {
      const res = await axios.get<Coffee[]>(
        'https://api.sampleapis.com/coffee/hot'
      );
      console.log(res.data);
      // console.log('getCoffeeが実行されました');
      setCoffees(res.data);
    };
    getCoffee();
    // console.log('useEffectが実行されました');
  }, []);
  // console.log({ coffees });

  return (
    // <>
    //   <div>{coffees.length > 0 && coffees[0].description}</div>
    // </>
    // <>
    //   <div>{coffees[0].description}</div>
    // </>
    <>
      {coffees.map((coffee) => (
        <Card {...coffee} />
      ))}
      {/* {console.log('renderが実行されました。')} */}
    </>
  );
};

export default App;
