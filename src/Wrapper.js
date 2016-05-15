import React from 'react';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    id: React.PropTypes.string
};

class Wrapper extends React.Component {
    render() {
        const {label, validationState, validationMessage, id, children} = this.props;
        const validationClass =
            validationState === 'error' ? 'red-text' :
                validationState === 'warning' ? 'yellow-text' :
                    validationState === 'success' ? 'green-text' : '';
        return <div>
            {label ? <label className={validationClass} htmlFor={id}>{label}</label> : null}
            {children}
            {label ? <span className={validationClass}>{validationMessage}</span> : null}
        </div>
    }
}

Wrapper.propTypes = propTypes;

export default Wrapper