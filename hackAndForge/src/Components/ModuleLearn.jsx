import React from "react";
import { useSelector } from "react-redux";

function ModuleLearn({name, content}) {
  const Learn = useSelector((state) => state.perfs.Learn)
  const Depart = useSelector((state) => state.perfs.Department)
  return (
    <>
      <div className="bg-orange-400 rounded-md h-44 w-4/5">
        <h1 className="font-bold p-5">{name}</h1>
        <p className="ml-10">{content} branch {Depart} and type {Learn}
        </p>
      </div>
    </>
  );
}

export default ModuleLearn;
