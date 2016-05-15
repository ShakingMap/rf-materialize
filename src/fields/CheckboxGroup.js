import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, readOnly, disabled}
    inline: React.PropTypes.bool
};

const defaultProps = {
    onChange(){},
    items: {}
};

class CheckboxGroup extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps} = this.props;

        if (value === null) value = [];

        return <div className={validationState ? ('has-'+validationState):''}>
            {
                Object.keys(items).map((key, index)=> <div key={key} className={inline? 'checkbox-inline':'checkbox'}>
                    <label>
                        <input
                            {...{
                                ref: key,
                                type: 'checkbox',
                                checked: value === undefined ? undefined : value.indexOf(key) > -1,
                                disabled: items[key].disabled || disabled,
                                readOnly: items[key].readOnly || readOnly,
                                onChange: e=> {
                                    if (value === undefined) onChange(Object.keys(items).map((key)=>(this.refs[key] && this.refs[key].checked) ? key : null).filter(key=>key !== null), e)
                                    else onChange(value.concat(key).filter(v=> v !== key || e.target.checked), e)
                                }
                            }}
                        />
                        {items[key].label}
                    </label>
                </div>)
            }
        </div>
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;