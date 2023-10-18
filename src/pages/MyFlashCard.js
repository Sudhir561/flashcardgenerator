import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiCrossMark } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from "../components/DeleteModal";

function MyFlashCard() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  const [flashCardData, setFlashCardData] = useState(localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : []
  );

  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(6);
  const handleViewCardsClick = (elem) => {
    navigate("/flashCardDetails", { state: elem });
  };

  const deleteFlashCard = (delClickedItem) => {
    setShowDeleteModal(true);
    if (deleteCard === true) {

      console.log(deleteCard);
      let newData = [...flashCardData]
      newData = flashCardData.filter((elem) => {
        return elem !== delClickedItem;
      })
      setFlashCardData(newData);
      localStorage.setItem("flashcards", JSON.stringify(newData));
      toast.error(delClickedItem.groupName + " Flashcard Deleted ", { theme: "colored", icon: false, pauseOnFocusLoss: false })
    }
    else {
      setDeleteCard(false);

    }
  };
  return (
<<<<<<< HEAD
    <div className="myFlashcardDiv w-[78%] m-auto md:mt-10 ">
      <div className="absolute pr-10 text-sm font-bold text-right text-gray-500 right-24">Total FlashCards : {dataS.length}</div>
      <div className="flex flex-wrap m-auto overflow-hidden display-flex " >
        {dataS ? dataS.slice(0, showCard).map((elem, index) => (
          <div key={index} className="childCards ">
            <button className="absolute hidden text-3xl text-gray-500 del -right-3 -top-5 hover:text-4xl hover:text-red-600 " onClick={() => del(elem, index)}><GiCrossMark /></button>
            <img className="border-2 bg-slate-400  w-16 h-16 m-auto rounded-full absolute -top-12 left-[39.3%] mb-10"
              src={elem.groupImage ? elem.groupImage : logo} />
            <h1 className="mt-4 font-bold ">{elem.groupName}</h1>
            <h2 className="h-10 mt-1 text-gray-700">
              {elem.groupDescription.length > 60 ? elem.groupDescription.slice(0, 60) + "..." : elem.groupDescription} </h2>
            <h2 className="mt-8 font-bold text-gray-500">  {elem.term.length} Cards </h2>
            <button
              className="w-40 h-8 m-auto font-medium text-red-600 duration-300 border-2 border-red-500 rounded hover:bg-red-500 hover:text-white"
              onClick={() => handleViewCardsClick(elem)} >  View Cards
            </button>
          </div>
        ))
          : <>
            <div className="mt-32 text-red-800 text-7xl"> "No data available"</div>
            <p className="mt-5 text-xl">Please go to <i className="text-blue-500 underline hover:text-teal-600"><Link to="/createflashcard" >Create New FlashCard</Link></i></p>
          </>}

        {/* See all and See less Button if we have more than 6 FlashCard */}
        {dataS && dataS.length > 6 ? (
          <div className="w-[100%]">
            <div className="mt-5 text-right " >
              {dataS.length === showCard ?
                (
                  <button onClick={() => { setShowCard(6); }}
                    className="w-24 mx-5 mb-24 font-bold text-red-700">
                    See less
                  </button>) : (
                  <button onClick={() => { setShowCard(dataS.length) }}
                    className="w-24 mx-5 mb-24 font-bold text-red-500 hover:text-red-700">
                    See all
                  </button>
                )}
=======
    <>
      <div className="myFlashcardDiv w-[78%] m-auto mt-3 ">
        <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} deleteCard={deleteCard} setDeleteCard={setDeleteCard} />
        <ToastContainer />
        <div className=" text-right pr-10 text-sm absolute right-24   text-gray-500 font-bold ">Total FlashCards : {flashCardData.length}</div>
        <div name="displayFlashcardDiv"
          className=" flex flex-wrap m-auto overflow-hidden  " >
          {flashCardData.length !== 0 ? flashCardData.slice(0, showCard).map((elem, index) => (
            <div key={index} name="childCards" className="childCards flex flex-col m-auto bg-white w-[300px] h-[200px] p-[8px] rounded mt-[50px] relative mb-[10px] ">
              <button className="del absolute text-gray-500 -right-3 -top-5 hidden  text-3xl hover:text-4xl hover:text-red-600 " onClick={() => { deleteFlashCard(elem, index) }}><GiCrossMark /></button>
              <img className="border-2 bg-slate-400  w-[70px] h-[70px] m-auto rounded-full absolute -top-12 left-[39.3%] mb-10"
                src={elem.groupImage ? elem.groupImage : logo} />
              <h1 className="font-bold  mt-4 ">{elem.groupName}</h1>
              <h2 className="text-gray-700 h-10 mt-1">
                {elem.groupDescription.length > 60 ? elem.groupDescription.slice(0, 60) + "..." : elem.groupDescription} </h2>
              <h2 className="text-gray-500 font-bold mt-8">  {elem.term.length} Cards </h2>
              <button
                className="border-2 border-red-500 font-medium  m-auto text-red-600 w-40 h-8  rounded hover:bg-red-500 hover:text-white duration-300"
                onClick={() => handleViewCardsClick(elem)} >  View Cards
              </button>
>>>>>>> ef5bfe0eefe0bd295bd7ae0623e317c39634fcde
            </div>
          ))
            : <>
              <div className="text-7xl text-red-800 mt-32"> "No data available"</div>
              <p className="text-xl mt-5">Please go and <i className="text-blue-500 underline hover:text-teal-600"><Link to="/createflashcard" >Create New FlashCard</Link></i></p>
            </>}

          {/* See all and See less Button if we have more than 6 FlashCard */}
          {flashCardData && flashCardData.length > 6 ? (
            <div className="w-[100%]">
              <div className="mt-5 text-right " >
                {flashCardData.length === showCard ?
                  (
                    <button onClick={() => { setShowCard(6); }}
                      className="mb-24 font-bold w-24 mx-5 text-red-700">
                      See less
                    </button>) : (
                    <button onClick={() => { setShowCard(flashCardData.length) }}
                      className="mb-24 font-bold w-24 mx-5 text-red-500 hover:text-red-700">
                      See all
                    </button>
                  )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MyFlashCard;
