import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Angelo'},
        {id: 2, name: 'Yasmim'},
        {id: 3, name: 'Apolo'},
    ]

    return response.json(users);
};