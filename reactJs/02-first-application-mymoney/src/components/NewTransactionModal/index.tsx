import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saida.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type='button'>
                <img 
                    src={closeImg} 
                    alt="close modal" 
                    className='react-modal-close' 
                    onClick={onRequestClose}
                />
            </button>
            <Container>
                <h2>Register Transaction</h2>
                <input 
                    placeholder='Title' 
                />
                <input 
                    type='number' 
                    placeholder='Value' 
                />

                <TransactionTypeContainer>
                    <button
                        type='button'
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Income</span>
                    </button>
                    <button
                        type='button'
                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Outcome</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder='Category' />
                <button type="submit">
                    Register
                </button>    
            </Container>
        </Modal>
    );
}