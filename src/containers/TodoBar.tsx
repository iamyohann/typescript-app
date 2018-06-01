import * as React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
class TodoBar extends React.Component<any, any> {
    public render() {
        return (
            <React.Fragment>
                <TextBox placeholder="Type something..." />
                <Button>Add</Button>
            </React.Fragment>
        );
    }
}

export default TodoBar;
