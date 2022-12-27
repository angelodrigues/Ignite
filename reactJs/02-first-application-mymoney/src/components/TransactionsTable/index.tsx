import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">R$12.000</td>
                        <td>Development</td>
                        <td>26/12/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Casa</td>
                        <td>27/12/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}