import React, { useState, useEffect, memo } from 'react';
import Modal from 'react-modal';

import Loading from '../../assets/images/loading.gif';

const ShowModal = () => {
    const [open, setOpen] = useState(true);
    return (
        <Modal isOpen={open}>
            <img src={Loading} alt="Loading" />
            <button onClick={() => setOpen(false)}>Next</button>
        </Modal>
    );
};

export default memo(ShowModal);
