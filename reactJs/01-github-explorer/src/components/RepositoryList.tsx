import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'; 
import { useEffect, useState } from "react";

interface RepositoryList {    
    name: string;
    description: string;
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<RepositoryList[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/angelodrigues/repos')
        .then(response => response.json())
        .then(data => setRepositories(data.slice(1,9)));
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