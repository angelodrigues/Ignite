import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(props) {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem />
            </ul>
        </section>
    );   
};