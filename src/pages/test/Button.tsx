import React from 'react';

const Button = ({onClick}: any) => {
    const [state, setState] = React.useState(0);
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>Button</button>
        </div>
    );
};

export default Button;