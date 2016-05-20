import React from 'react';
import utils from '../utils';
import {cleanValue} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Textarea extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled, ...otherProps} = this.props;

        const style = utils.getInputValidationStyle(validationState);

        return <textarea
            style={style}
            id={id}
            className="materialize-textarea"
            value={value}
            onChange={e=>onChange(e.target.value, e)}
            readOnly={readOnly}
            disabled={disabled}
            {...otherProps}
        />
    }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
Textarea.cleanValue = cleanValue.string;

export default Textarea;