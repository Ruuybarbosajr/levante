import React, { useState } from 'react';
import { Modal } from '../Modal';

export function OpenModal({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <td><a href='#' role="button" onClick={() => setOpen(true)}>{title}</a></td>
      {open && (
        <Modal open setOpen={setOpen}>
          { children }
        </Modal>
      )
      }
    </>
  );
}