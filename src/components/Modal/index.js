import React, { memo } from 'react';
import Modal from 'react-modal';

import Correct from '../../assets/images/correct.png';
import Incorrect from '../../assets/images/incorrect.png';

import './styles.css';
const ShowModal = ({ open = false, isCorrect, onClose }) => {
    return (
        <Modal isOpen={open} className="content">
            <div className="message">
                {isCorrect ? (
                    <div>
                        <img src={Correct} alt="Correct" />
                        <strong>
                            Correct question, congratulations!
                        </strong>
                    </div>
                ) : (
                    <div>
                        <img src={Incorrect} alt="Incorrect" />
                        <strong>Incorrect question! </strong>
                    </div>
                )}

                <button onClick={onClose}>Next</button>
            </div>
        </Modal>
    );
};

export default memo(ShowModal);
