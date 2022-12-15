import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'; 

export function RepositoryList(props) {
    return(
        <section className="repository-list">
            <div>
                <h1>Lista de repositórios</h1>

                <ul>
                    <RepositoryItem />
                    <RepositoryItem />
                    <RepositoryItem />
                    <RepositoryItem />
                </ul>
            </div>
        </section>
    );   
};