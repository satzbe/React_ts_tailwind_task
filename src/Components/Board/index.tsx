import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';
import { MockApiUrl } from '../Resources';
import { CardProps } from '../types';
import Loader from '../Loader';
import Model from '../Model';
import CreateForm from '../Form';

const Board = () => {
  const [cards, setCards] = useState<CardProps[]>([])
  const [loader, setLoader] = useState<boolean>(false);
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');

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

  const openModal = (command: boolean) => {
    setmodalOpen(command);
    !command && reloadData(true);
  }

  const getId = (id: string) => {
    setEditId(id);
    openModal(true);
  }

  return (
    <div className='lg:container mx-auto'>
      {loader && <Loader />}
      {!loader && cards.map((data, i) => {
        return <Card key={i} {...data} setLoader={reloadData} sendId={getId} />;
      })}
      <Model visible={modalOpen} closeModal={openModal} showClose={true}>
        <CreateForm id={editId} modalopenclose={openModal} />
      </Model>

    </div>
  );
};

export default Board;
