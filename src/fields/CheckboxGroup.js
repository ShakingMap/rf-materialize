import React from 'react';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, readOnly, disabled} | key: label
    inline: React.PropTypes.bool
};

const defaultProps = {
    onChange(){},
    items: {}
};

class CheckboxGroup extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps
        } = this.props;

        const validationColor = utils.getValidationColor(validationState);

        const validItems = {};
        Object.keys(items).forEach(key=> {
            validItems[key] = typeof items[key] === 'object' ?  items[key] : {label: items[key]}
        });
        items = validItems;

        return <div>
            {
                Object.keys(items).map((key, index)=> <div key={key} style={inline? {display: 'inline', marginRight: '2rem'}:null}>
                    <input
                        {...{
                            id: id + '.' + index,
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
                    <label style={{color: validationColor}} htmlFor={id + '.' + index}>{items[key].label}</label>
                </div>)
            }
        </div>
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.cleanValue = (value, {items}) => {
    if (value === undefined) return value;
    else if (!Array.isArray(value)) return [];
    else return value.filter(key=>!!items[key])
};

export default CheckboxGroup;