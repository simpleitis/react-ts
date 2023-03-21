import React, { useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
};

const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    // Using type assertion. If we use type assertion then we don't have to check if the the there is a value using '?'. So basically we are telling the compiler that the empty object is of type AuthUser. Type assertion is only used if you are 100% sure that some variable it going to be set to a particular value shortly after loading the page.
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({ name: 'Amar', email: 'a@a.com' });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};

export default User;
