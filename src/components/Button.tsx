import * as React from 'react';

const Button: React.SFC<React.HTMLAttributes<HTMLButtonElement>> = (props: React.HTMLAttributes<HTMLButtonElement>) => (
    <button {...props} />
);

export default Button;