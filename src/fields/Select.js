import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    placeholder: React.PropTypes.string,
    items: React.PropTypes.object // key:{label, readOnly, disabled}
};

const defaultProps = {
    onChange(){},

    placeholder: '-',
    items: {}
};

class Select extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            placeholder, items,
            ...otherProps} = this.props;

        if (value === null) value = '';

        return <div className={validationState ? ('has-'+validationState):''}>
            <select {...{
                className: "form-control",
                value: value,
                onChange: e=>onChange(e.target.value, e)
            }}>
                <option {...{value: '', disabled: true}}>{placeholder}</option>
                {
                    Object.keys(items).map((key, index)=> <option {...{
                            key: key,
                            value: key,
                            readOnly: items[key].readOnly || readOnly,
                            disabled: items[key].disabled || disabled
                        }}>{items[key].label}</option>
                    )
                }
            </select>
        </div>
    }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;