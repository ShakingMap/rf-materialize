import React from 'react';

const propTypes = {
    validationState: React.PropTypes.any
};

class Group extends React.Component {
    render() {
        const {validationState, children} = this.props;
        return <div className="card-panel">
            {children}
        </div>
    }
}

Group.propTypes = propTypes;

export default Group