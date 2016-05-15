import React from 'react';

const propTypes = {
    validationState: React.PropTypes.any
};

class Group extends React.Component {
    render() {
        const {validationState, children} = this.props;
        return <div className="panel panel-default">
            <div className="panel-body">
                {children}
            </div>
        </div>
    }
}

Group.propTypes = propTypes;

export default Group