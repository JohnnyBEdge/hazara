import React from 'react'
import { ModalContainer, Modal, CloseModalIcon } from './DonateModalElements';

const DonateModal = ({toggleDonate, openDonate}) => {
    return (
        <ModalContainer openDonate={openDonate} onClick={toggleDonate}>
            <Modal >
                <CloseModalIcon onClick={toggleDonate} fontSize="large" />
                INSERT PAYPAL HERE
            </Modal>

        </ModalContainer>
    )
}

export default DonateModal;
