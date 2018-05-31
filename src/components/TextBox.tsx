import * as React from 'react';

const TextBox: React.SFC<React.HTMLAttributes<HTMLInputElement>> = (props: React.HTMLAttributes<HTMLInputElement>) => {
    return <input {...props} />
}

export default TextBox;
