import React from "react";

const AddCard = ({
  openModal,
  onOpen,
  onClose,
  onChange,
  handleAddNewCard,
  newCard,
}) => {
  return (
    <div className=" rounded-md h-max cursor-pointer">
      <div className=" p-3" onClick={onOpen}>
        <span className="font-bold mr-2"> + </span>
        Add a Card
      </div>
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-left">
                  Card title
                </label>
                <input
                  type="text"
                  id="news-list"
                  name="title"
                  value={newCard.title}
                  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Title ..."
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-left">
                  Card Description
                </label>
                <input
                  type="text"
                  id="news-list"
                  name="description"
                  value={newCard.description}
                  className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Description ..."
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center p-4 md:p-5  rounded-b ">
              <button
                type="button"
                onClick={handleAddNewCard}
                disabled={!newCard.title || !newCard.description}
                className="text-white bg-blue-700 disabled:bg-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                create{" "}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ms-3 text-gray-500 border border-gray-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
