import React from 'react';
import moment from 'moment';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.instanceOf(Date),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    display: React.PropTypes.oneOf(['utc', 'local'])

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){},
    display: 'local'
};

class DateField extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            display,
            ...otherProps} = this.props;

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                className="form-control"
                type="date"
                value={this.getInnerValue()}
                onChange={this.onChange.bind(this)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }

    getInnerValue() {
        const {value, display} = this.props;
        if (value === undefined) return undefined;
        if (value === null) return '';

        // value is a date object...

        const format = 'YYYY-MM-DD';
        if (display === 'local') {
            return moment(value).format(format);
        }
        else {
            // display is 'utc'
            return moment.utc(value).format(format);
        }
    }

    onChange(e) {
        const {display, onChange} = this.props;
        const innerValue = e.target.value;

        let value;
        if (!innerValue) value = null;
        else if (display === 'local') {
            value = moment(innerValue).toDate();
        }
        else {
            // display is 'utc'
            value = moment.utc(innerValue).toDate();
        }
        onChange(value, e);
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;
DateField.displayName = 'Date';

export default DateField;