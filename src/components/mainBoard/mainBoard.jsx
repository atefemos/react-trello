import React from "react";
import AddList from "../addList/addList";
import List from "../list/list";
import { UseMainBoard } from "./mainBoard.hook";

const MainBoard = () => {
  const {
    handleAddNewList,
    handleChange,
    handleOpenModal,
    openModal,
    newItem,
    storedList,
    handleCloseModal,
  } = UseMainBoard();

  return (
    <div className="relative z-0 grid auto-cols-[300px] grid-flow-col gap-4 overflow-x-auto p-4 h-max min-h-screen">
      {storedList?.map((item) => (
        <List key={item.id} data={item} />
      ))}

      <AddList
        onChange={handleChange}
        newItem={newItem}
        handleAddNewList={handleAddNewList}
        openModal={openModal}
        onOpen={handleOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default MainBoard;
