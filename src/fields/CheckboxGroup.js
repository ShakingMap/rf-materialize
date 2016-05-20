import React from 'react';
import utils from '../utils';
import {cleanValue, formatItems} from 'rf-fields-utils';

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

        items = formatItems(items);

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
                                let newValue;
                                if (e.target.checked) {
                                    if (value.includes(key)) newValue = value;
                                    else newValue = value.concat(key);
                                }
                                else {
                                    if (!value.includes(key)) newValue = value;
                                    else {
                                        const index = value.indexOf(key);
                                        newValue = value.slice(0, index).concat(value.slice(index + 1));
                                    }
                                }
                                onChange(newValue, e);
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
CheckboxGroup.cleanValue = cleanValue.manyOfItems;

export default CheckboxGroup;