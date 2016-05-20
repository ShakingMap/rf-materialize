import React from 'react';
import utils from '../utils';
import {cleanValue} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class NumberField extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled, ...otherProps} = this.props;
        const style = utils.getInputValidationStyle(validationState);

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                style={style}
                id={id}
                className="form-control"
                type="number"
                value={value === null ? '' : String(value)}
                onChange={e=>onChange(e.target.value === '' ? null : Number(e.target.value), e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }
}

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;
NumberField.displayName = 'Number';
NumberField.cleanValue = cleanValue.number;

export default NumberField;