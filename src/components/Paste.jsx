import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../store/slices/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {

    const {pastes} = useSelector((state) => ( state.paste))

    const [searchTtitle, setSearchTitle] = useState("");

    const dispatch = useDispatch();

    const filterTitle = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTtitle.toLowerCase()));

    function handleDelete(pasteId){

        dispatch(removeFromPastes(pasteId));

    }

    function handleCopy(paste){

        navigator.clipboard.writeText(paste.content);

        toast.success("Content Copied Successfully");

    }

  return (
    <div>

        <input
        type='serch'
        placeholder='Search Here...'
        value={searchTtitle}
        onChange={(e) => {
            setSearchTitle(e.target.value);
        }}
        className=' p-2 rounded-2xl min-w-[600px] mt-5 pl-4'
        ></input>

        <div className=" flex flex-col gap-5 mt-5">

            {
                filterTitle.map((paste) => (
                    <div className="border p-2"
                    key={paste._id}
                    >
                        <div className="">
                            {paste.title}
                        </div>
                        <div className="">
                            {paste.content}
                        </div>

                        <div className=" flex flex-row gap-4 place-content-evenly">
                            <Link to={`/?pasteId=${paste?._id}`}>
                                <button>
                                    Edit
                                </button>
                            </Link>
                            <Link to={`/pastes/${paste?._id}`}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <button
                            onClick={()=>{
                                handleDelete(paste._id);
                            }}
                            >
                                Delete
                            </button>
                            <button onClick={()=>{
                                handleCopy(paste);
                            }}>
                                Copy
                            </button>
                            <button>
                                Share
                            </button>
                        </div>

                        <div className="">
                            {paste.createdAt}
                        </div>

                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Paste