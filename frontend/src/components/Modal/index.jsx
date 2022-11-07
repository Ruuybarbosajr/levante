import React from 'react';

export function Modal({ children, setOpen }) {
  
  return (
    <dialog id="modal-example" open>
      <article>
        { children }
        <footer>
          <a href="#"
            role="button"
            className="secondary"
            data-target="modal-example"
            onClick={() => setOpen((prev) => !prev)}>
        Cancel
          </a>
          <a href="#confirm"
            role="button"
            data-target="modal-example"
          >
        Confirm
          </a>
        </footer>
      </article>
    </dialog>
  );
}