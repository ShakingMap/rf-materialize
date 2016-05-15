import React from 'react';

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

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                className="form-control"
                type="number"
                value={value === undefined ? undefined : value === null ? '' : String(value)}
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

export default NumberField;