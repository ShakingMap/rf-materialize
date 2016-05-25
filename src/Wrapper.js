import React from 'react';
import utils from './utils';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    id: React.PropTypes.string
};

class Wrapper extends React.Component {
    render() {
        const {label, validationState, validationMessage, id, children} = this.props;

        const validationColor = utils.getValidationColor(validationState);

        return <div>
            {label ? <label style={{color: validationColor}} htmlFor={id}>{label}</label> : null}
            {children}
            {validationMessage ? <span style={{color: validationColor}}>{validationMessage}</span> : null}
        </div>
    }
}

Wrapper.propTypes = propTypes;

export default Wrapper