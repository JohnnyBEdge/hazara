import React from 'react'
import { ModalContainer, Modal } from './DonateModalElements';

const DonateModal = ({toggleDonate, openDonate}) => {
    return (
        <ModalContainer >
            <Modal openDonate={openDonate}>
                INSERT PAYPAL HERE
            </Modal>

        </ModalContainer>
    )
}

export default DonateModal;
