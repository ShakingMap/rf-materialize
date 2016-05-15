import React from 'react';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Checkbox extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            label,
            ...otherProps
        } = this.props;

        if (value === null) value = false;
        const validationColor = utils.getValidationColor(validationState);
        
        return <div>
            <input
                id={id}
                type="checkbox"
                checked={value}
                onChange={e=>onChange(e.target.checked, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
            <label style={{color: validationColor}} htmlFor={id}>{label}</label>
        </div>
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;