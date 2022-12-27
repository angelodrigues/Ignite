import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="income image" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="outcome image" />
                </header>
                <strong>-R$100,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Outcome</p>
                    <img src={totalImg} alt="income image" />
                </header>
                <strong>R$900,00</strong>
            </div>
        </Container>
    );
}