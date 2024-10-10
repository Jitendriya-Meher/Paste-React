import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../store/slices/pasteSlice";

const Home = () => {

    const allPastes = useSelector((state) => (state.paste.pastes))

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste(){

    const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString()
    };

    // update paste
    if( pasteId){
        dispatch(updateToPastes(paste));
    }
    // create new paste
    else{
        dispatch(addToPastes(paste));
    }
    
    // after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});

  }

  useEffect(()=>{
    if( pasteId){
        const paste = allPastes.find((p) => p._id==pasteId);

        setTitle(paste.title);
        setValue(paste.content);
    }
  },[pasteId]);

  return (
    <div className="">
      <div className=" flex flex-row gap-7 place-content-between">
        <input
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" p-2 rounded-2xl mt-2 w-[66%] pl-4"
        />

        <button className=" p-2 rounded-2xl mt-2"
        onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div className=" mt-0">
          <textarea
          value={value}
          placeholder="Enter Content Here..."
          onChange={(e) => {
            setValue(e.target.value)
          }}
          rows={20}
          className=" rounded-2xl mt-4 min-w-[500px] p-4"
          >
          </textarea>
      </div>

    </div>
  );
};

export default Home;
