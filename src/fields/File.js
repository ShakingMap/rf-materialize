import React from 'react';
import utils from '../utils';
import {cleanValue, fileToDataUrl} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.object, // {path, file, files}
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    text: React.PropTypes.string,
    enablePreview: React.PropTypes.bool,
    previewStyle: React.PropTypes.object

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){},
    text: 'file',
    previewStyle: {maxWidth: '100%', maxHeight: '200px'}
};

class File extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewUrl: ''
        }
    }

    componentWillMount() {
        if (this.props.enablePreview) this.tryToGeneratePreviewUrl(this.props.value.file)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.enablePreview) this.tryToGeneratePreviewUrl(nextProps.value.file, this.props.value.file);
    }

    render() {
        const {
            id, validationState, value, onChange, readOnly, disabled,
            text, enablePreview, previewStyle,
            ...otherProps
        } = this.props;
        const {previewUrl} = this.state;

        const showValue = value.file ? value.file.name : '';
        const style = utils.getInputValidationStyle(validationState);

        return <div className="file-field input-field">
            <div className="btn">
                <span>{text}</span>
                <input
                    ref="input"
                    id={id}
                    type="file"
                    value={value.path}
                    onChange={e=>onChange(e.target.value ? {path:e.target.value, file:e.target.files[0], files: e.target.files}:{path:''}, e)}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...otherProps}
                />
            </div>
            <div className="file-path-wrapper">
                <input value={showValue} style={style} className="file-path" type="text" readOnly={readOnly}
                       disabled={disabled}/>
            </div>
            {
                enablePreview && previewUrl ? <img {...{
                    style: previewStyle,
                    src: previewUrl,
                    onClick: ()=> {this.refs.input.click()}
                }}/> : null
            }
        </div>
    }

    tryToGeneratePreviewUrl(file, oldFile) {
        if (!file || !/^image/i.test(file.type)) {
            if (this.state.previewUrl) this.setState({previewUrl: ''});
        }
        else if (!oldFile || file.name !== oldFile.name || file.size !== oldFile.size || file.type !== oldFile.type) {
            fileToDataUrl(file, (err, url)=> {
                if (err) console.error(err);
                else this.setState({previewUrl: url});
            })
        }
    }
}

File.propTypes = propTypes;
File.defaultProps = defaultProps;
File.cleanValue = cleanValue.file;

export default File;