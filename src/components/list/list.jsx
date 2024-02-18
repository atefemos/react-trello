import React from "react";
import Card from "../card/card";
import AddCard from "../addCard/addCard";
import { UseList } from "./list.hook";

const List = ({ data }) => {
  const {
    openModal,
    handleOpenModal,
    onChange,
    setNewCard,
    dropref,
    myCards,
    handleCloseModal,
    handleAddNewCard,
    newCard,
  } = UseList(data);

  return (
    <div className="h-max bg-slate-100 rounded-lg py-3 px-4" ref={dropref}>
      <h4 className="font-bold p-2 border-b border-blue-800">
        {data?.listTitle}
      </h4>
      {myCards?.map((item) => (
        <Card
          key={item.id}
          data={item}
          onOpen={handleOpenModal}
          setNewCard={setNewCard}
        />
      ))}
      <AddCard
        openModal={openModal}
        onOpen={handleOpenModal}
        onClose={handleCloseModal}
        onChange={onChange}
        handleAddNewCard={handleAddNewCard}
        newCard={newCard}
      />
    </div>
  );
};

export default List;
