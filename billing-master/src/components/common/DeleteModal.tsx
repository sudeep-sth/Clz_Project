import React from "react";

type Props = {
  delteHandler: () => void;
};

const DeleteModal = ({ delteHandler }: Props) => {
  return (
    <>
      <form method="dialog" className="modal-box max-w-sm">
        <h3 className="font-bold text-md  text-red-500 ">Delete?</h3>
        <p className="pt-4 font-semibold text-sm">
          Are you sure you want to delete?
        </p>
        <p className=" font-semibold text-red-400 text-sm">
          This action can not be undone.
        </p>
        <div className="modal-action">
          <button
            onClick={delteHandler}
            type="button"
            className="btn btn-error text-white  btn-sm !h-[40px]"
          >
            Delete
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </>
  );
};

export default DeleteModal;
