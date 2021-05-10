import apiOrigin from './api';

export const getAllUsers = authToken => {
    return fetch('${apiOrigin}/api/user', {
        method: 'POST' ,
        headers: {
            'auth-token': authToken,
        },

    }
    )
    .then(res => res.json());
}