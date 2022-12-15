import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'; 
import { useEffect, useState } from "react";


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/angelodrigues/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);


    return(
        <section className="repository-list">
            <div>
                <h1>Lista de repositórios</h1>

                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}
                </ul>
            </div>
        </section>
    );   
};