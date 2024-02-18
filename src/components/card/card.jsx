import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ data, onOpen, setNewCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: data.parent,
    item: { data },
    end: (order, monitor) => {},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleClick = () => {
    setNewCard(data);
    onOpen();
  };

  return (
    <div
      className={`${
        isDragging ? "opacity-50" : "opacity-100"
      } w-full bg-white rounded-md shadow-sm p-2 cursor-pointer my-4 opa`}
      ref={drag}
      onClick={handleClick}
    >
      {data?.title}
      <p className="text-xs py-3 mt-3 rounded-md text-gray-500 border border-gray-300">
        {data?.description}
      </p>
    </div>
  );
};

export default Card;
