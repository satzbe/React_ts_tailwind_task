import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';
import { MockApiUrl } from '../Resources';
import { CardProps } from '../types';
import Loader from '../Loader';

const Board = () => {
  const [cards, setCards] = useState<CardProps[]>([])
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    getDatas();
  }, []);

  // Get data from mockapi 
  const getDatas = () => {
    setLoader(true)
    axios.get(MockApiUrl).then(res => {
      const { data }: any = res;
      setCards(data)
      setLoader(false)
    })
  }

  const reloadData = (reload: boolean) => {
    reload && getDatas()
  }

  return (
    <div className='lg:container mx-auto'>
      {loader && <Loader />}
      {!loader && cards.map((data, i) => {
        return <Card key={i} {...data} setLoader={reloadData} />;
      })}
    </div>
  );
};

export default Board;
