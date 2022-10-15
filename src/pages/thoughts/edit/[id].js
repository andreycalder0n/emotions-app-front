import { useState } from 'react';

import FormThought from '@components/FormThought';
import Modal from '@common/Modal';

export default function EditThought() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FormThought setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen}></Modal>
    </>)
};
