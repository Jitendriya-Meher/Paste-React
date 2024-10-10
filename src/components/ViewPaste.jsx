import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

    const allPastes = useSelector((state) => (state.paste.pastes));

    const {id} = useParams();

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  useEffect(()=>{
    if( id){
        const paste = allPastes.find((p) => p._id==id);

        setTitle(paste.title);
        setValue(paste.content);
    }
  },[id]);

  return (
    <div className="">
      <div className=" flex flex-row gap-7 place-content-between items-center">

        <input
          type="text"
          placeholder="Enter Title Here"
          value={title}
          className=" p-2 rounded-2xl mt-2 w-[100%] pl-4"
          disabled
        />

        <button className=" p-2 rounded-2xl mt-2 px-3"
        onClick={()=>{
            navigator.clipboard.writeText(value);
        }}
        >
            Copy
        </button>

      </div>

      <div className=" mt-0">
          <textarea
          value={value}
          placeholder="Enter Content Here..."
          rows={20}
          className=" rounded-2xl mt-4 min-w-[500px] p-4"
          disabled
          >
          </textarea>
      </div>

    </div>
  )
}

export default ViewPaste