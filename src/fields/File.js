import React from 'react';
import utils from '../utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.object, // {path, file, files}
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    text: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){},
    text: 'file'
};

class File extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            text,
            ...otherProps
        } = this.props;

        if (value === undefined) value = {path: undefined};
        else if (value === null) value = {path: ''};
        const showValue = value.path === undefined ? undefined : ((value.file && value.file.name) || '');
        const style = utils.getInputValidationStyle(validationState);

        return <div className="file-field input-field">
            <div className="btn">
                <span>{text}</span>
                <input
                    id={id}
                    type="file"
                    value={value.path}
                    onChange={e=>onChange({path:e.target.value, file:e.target.files[0], files: e.target.files}, e)}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...otherProps}
                />
            </div>
            <div className="file-path-wrapper">
                <input value={showValue} style={style} className="file-path" type="text" readOnly={readOnly} disabled={disabled}/>
            </div>
        </div>;

        // return <div className={validationState ? ('has-'+validationState):''}>
        //     <input
        //         id={id}
        //         type="file"
        //         value={value.path}
        //         onChange={e=>onChange({path:e.target.value, file:e.target.files[0], files: e.target.files}, e)}
        //         readOnly={readOnly}
        //         disabled={disabled}
        //         {...otherProps}
        //     />
        // </div>
    }
}

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;