import React from 'react';
import utils from '../utils';
import {cleanValue} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    display: React.PropTypes.oneOf(['show', 'hide'])

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'hide'
        }
    }

    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            display,
            ...otherProps
        } = this.props;

        display = display || this.state.display;
        const style = utils.getInputValidationStyle(validationState);

        return <div style={{display: 'flex', alignItems: 'center'}}>
            <input
                style={style}
                id={id}
                type={display==='show' ? 'text' : 'password'}
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
            <i className="material-icons" style={{cursor: 'pointer'}} onClick={this.onToggleDisplay.bind(this)}>
                {display === 'show' ? 'lock_open' : 'lock'}
            </i>
        </div>
    }

    onToggleDisplay() {
        this.setState({display: this.state.display === 'show' ? 'hide' : 'show'})
    }
}

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;
Password.cleanValue = cleanValue.string;

export default Password;