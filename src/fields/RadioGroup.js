import React from 'react';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
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

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.groupName = Math.random() + '';
    }

    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps} = this.props;

        const validationColor = utils.getValidationColor(validationState);

        return <div>
            {
                Object.keys(items).map((key, index)=> <div key={key} style={inline? {display: 'inline', marginRight: '2rem'}:null}>
                        <input
                            {...{
                                id: id + '.' + index,
                                ref: key,
                                name: this.groupName,
                                type: 'radio',
                                checked: value === undefined ? undefined : value === key,
                                disabled: items[key].disabled || disabled,
                                readOnly: items[key].readOnly || readOnly,
                                onChange: e=> onChange(key, e)
                            }}
                        />
                    <label style={{color: validationColor}} htmlFor={id + '.' + index}>{items[key].label}</label>
                </div>)
            }
        </div>
    }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.cleanValue = (value, {items})=> {
    if (value === undefined) return value;
    else if (!!items[value]) return '';
    else return value;
};

export default RadioGroup;