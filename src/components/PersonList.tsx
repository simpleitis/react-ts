import React from 'react';
import { Name } from './Person.types';

type PersonListProps = {
    names: Name[];
};

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <h2>
                {props.names[0].first} {props.names[0].last}
            </h2>
            <h2>
                {props.names[1].first} {props.names[1].last}
            </h2>
            <h2>
                {props.names[2].first} {props.names[2].last}
            </h2>
        </div>
    );
};

export default PersonList;
