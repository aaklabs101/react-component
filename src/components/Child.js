import React from 'react';

const Child = ({roll, name,subject}) => {
    // showing data in UI.............
    return (
            <li>Roll: {roll}, Name: {name}, Subject: {subject}</li>
    );
};

export default Child;