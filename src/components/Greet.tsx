import React from 'react';

type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
    isActive?: boolean;
};

const Greet = (props: GreetProps) => {
    const { isActive = true } = props;

    return (
        <div>
            <h2>
                {props.isLoggedIn
                    ? `Welcome ${props.name}, you have ${props.messageCount} messages`
                    : 'Welcome guest'}
            </h2>
            <p>{isActive ? 'Active User' : 'Occational user'}</p>
        </div>
    );
};

export default Greet;
