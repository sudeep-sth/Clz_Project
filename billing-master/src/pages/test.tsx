import React, { useState } from "react";

type Props = {};

const Test = (props: Props) => {
  const [state, setState] = useState(false);
  const onclickhandler = () => {
    setState(!state);
  };

  return (
    <div>
      {" "}
      <button onClick={onclickhandler} className="btn btn-primary">
        hello
      </button>
      {state && (
        <>
          
        <div
            onClick={() => setState(false)}
            className="fixed top-0 bg-black bg-opacity-40 w-screen z-10 h-screen flex justify-center items-center "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className=" h-52 bg-white w-64 border border-red-600"
            >
              <input type="text" placeholder="enter name" />
              <input type="text" placeholder="enter name" />
              <div>
                <button>submit</button>
              </div>
              <button
                onClick={() => {
                  setState(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
