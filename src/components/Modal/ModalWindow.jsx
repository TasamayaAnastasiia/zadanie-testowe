import Modal from 'react-modal';
import { modalIsOpen } from '../../redux/constants';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from "../../redux/slice";
import css from './ModalWindow.module.css';
import { FormContact } from './FormContact/FormContact.jsx';

export const ModalWindow = () => {

    const dispatch = useDispatch();
    const open = useSelector(modalIsOpen);


    const handleCloseModal = () => {
        dispatch(openModal(false));
        document.body.style.overflow = 'scroll';
    }

    const customStyles = {
        content: {
          width: '390px',
          height: '370px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        },
    };

    
    return (
        <Modal isOpen={open} style={customStyles} ariaHideApp={false} onRequestClose={handleCloseModal}>
            <svg onClick={handleCloseModal} className={css.iconClose} width="20" height="20" viewBox="0 0 32 32">
                <path d="M6.276 4.391l-1.885 1.885 9.724 9.724-9.724 9.724 1.885 1.885 9.724-9.724 9.724 9.724 1.885-1.885-9.724-9.724 9.724-9.724-1.885-1.885-9.724 9.724-9.724-9.724z"></path>
            </svg>
            <FormContact/>
        </Modal>
    )
}