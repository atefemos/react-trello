import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils";

export function UseMainBoard() {
  const list = [];

  const [newItem, setNewItem] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setNewItem("");
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const storedList = getLocalStorage("list");

  const handleAddNewList = () => {
    storedList?.push({
      id: storedList?.length + 1,
      listTitle: newItem,
      cards: [],
    });

    setLocalStorage("list", storedList);
    handleCloseModal();
  };

  useEffect(() => {
    const handleStorage = () => {
      setLocalStorage("list", list);
    };

    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, []);

  return {
    handleAddNewList,
    handleChange,
    handleOpenModal,
    openModal,
    newItem,
    storedList,
    handleCloseModal,
  };
}
