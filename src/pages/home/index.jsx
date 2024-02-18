import React from "react";
import Header from "../../components/header/header";
import MainBoard from "../../components/mainBoard/mainBoard";

const Home = () => {
  return (
    <div className="bg-slate-200 w-screen h-max min-h-screen">
      <Header />
      <MainBoard />
    </div>
  );
};

export default Home;
