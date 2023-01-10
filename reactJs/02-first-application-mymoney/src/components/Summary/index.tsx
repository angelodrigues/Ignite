import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary(){

    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) =>{
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        }else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="income image" />
                </header>
                <strong>R$ {summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="outcome image" />
                </header>
                <strong>-R$ {summary.withdraws}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Outcome</p>
                    <img src={totalImg} alt="income image" />
                </header>
                <strong>R$ {summary.total}</strong>
            </div>
        </Container>
    );
}