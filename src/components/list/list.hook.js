import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { getLocalStorage, setLocalStorage } from "../../utils";

export function UseList(data) {
  let storedList = getLocalStorage("list");
  const myCards = storedList?.find((i) => i.id === data.id)?.cards;

  const [openModal, setOpenModal] = useState(false);
  const [newCard, setNewCard] = useState({
    id: Number(data.id?.toString() + (myCards?.length + 1)),
    title: "",
    description: "",
    parent: data.listTitle,
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setNewCard({
      id: Number(data.id?.toString() + (myCards?.length + 1)),
      title: "",
      description: "",
      parent: data.listTitle,
    });
    setOpenModal(false);
  };

  const onChange = (e) => {
    e.target.name === "title" &&
      setNewCard({ ...newCard, title: e.target.value });
    e.target.name === "description" &&
      setNewCard({ ...newCard, description: e.target.value });
  };

  const handleAddNewCard = () => {
    const isInArray = myCards?.some((i) => i.id === newCard.id);
    if (!isInArray) {
      myCards?.push(newCard);
    } else {
      myCards.splice(
        myCards?.findIndex((i) => i.id === newCard.id),
        1,
        newCard
      );
    }
    setLocalStorage("list", storedList);
    handleCloseModal();
  };

  useEffect(() => {
    const handleStorage = () => {
      setLocalStorage("list", storedList);
    };

    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, [myCards, storedList]);

  const [{ type }, dropref] = useDrop({
    accept: storedList.map((i) => i.listTitle),
    drop: (monitor) => {
      const prevList = storedList?.find((i) => i.listTitle === type);
      const prevListCards = prevList?.cards;
      const filteredCards = prevListCards.findIndex(
        (i) => i.id === monitor.data.id
      );
      storedList
        ?.find((i) => i.listTitle === type)
        ?.cards?.splice(filteredCards, 1);
      storedList
        ?.find((i) => i.listTitle === data?.listTitle)
        ?.cards?.push({ ...monitor.data, parent: data?.listTitle });

      setLocalStorage("list", storedList);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      type: monitor.getItemType(),
    }),
  });
  return {
    openModal,
    handleOpenModal,
    onChange,
    setNewCard,
    dropref,
    myCards,
    handleCloseModal,
    newCard,
    handleAddNewCard,
  };
}
