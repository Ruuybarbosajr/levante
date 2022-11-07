import React, { useState } from 'react';

export function Modal({ children, setOpen, functionAction }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleReq() {
    setLoading(true);
    const response = await functionAction();
    if (response?.id) {
      setLoading(true);
      setOpen((prev) => !prev);
    } else setError(true);
  }

  return (
    <dialog id="modal-example" open>
      <article>
        { error ?  
          <section className='container'>
            <hgroup>
              <h1>Something went wrong</h1>
              <h3>Try again</h3>
            </hgroup>
          </section>
          : children }
        <footer>
          <a href="#"
            role="button"
            className="secondary"
            data-target="modal-example"
            onClick={() => setOpen((prev) => !prev)}>
        Cancel
          </a>
          <a href=""
            aria-busy={loading}
            disabled={error}
            role="button"
            onClick={ () => handleReq() }
            data-target="modal-example"
          >
        Confirm
          </a>
        </footer>
      </article>
    </dialog>
  );
}