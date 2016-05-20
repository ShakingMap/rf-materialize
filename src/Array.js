import React from 'react';
import utlis from './utils';

const propTypes = {
    validationState: React.PropTypes.any,

    children: React.PropTypes.arrayOf(React.PropTypes.node),

    // func(index)
    onInsert: React.PropTypes.func,

    // func(index)
    onRemove: React.PropTypes.func,

    // func(fromIndex, toIndex)
    onMove: React.PropTypes.func,

    disabled: React.PropTypes.bool
};

const defaultProps = {
    children: [],
    onInsert(){},
    onRemove(){},
    onMove(){}
};

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        }
    }

    render() {
        const {validationState, onInsert, onRemove, onMove, children, disabled} = this.props;
        const {updating} = this.state;

        return <div className="card-panel">
            {
                !disabled ?
                    <div className="array-actions" style={{marginBottom: '10px'}}>
                        {
                            updating ?
                                <button type="button" className="btn btn waves-effect waves-light"
                                        onClick={()=>this.setState({updating: false})}>
                                    <i className="material-icons">done</i>
                                </button>
                                :
                                <button type="button" className="btn btn-primary"
                                        onClick={()=>this.setState({updating: true})}>
                                    <i className="material-icons">mode_edit</i>
                                </button>
                        }
                    </div>
                    : null
            }
            {children.map((child, index)=><div key={index}>
                {
                    !disabled && updating ?
                        <div className="array-item-actions" style={{marginBottom: '10px', marginTop: '10px'}}>
                            <button type="button" style={{marginRight: '10px'}}
                                    className="btn waves-effect waves-light"
                                    onClick={()=>onInsert(index)}>
                                <i className="material-icons">add</i>
                            </button>
                            <button type="button" style={{marginRight: '10px'}}
                                    className="btn waves-effect waves-light"
                                    onClick={()=>onRemove(index)}>
                                <i className="material-icons">remove</i>
                            </button>
                            <button type="button" style={{marginRight: '10px'}}
                                    className="btn waves-effect waves-light"
                                    onClick={index > 0 ? ()=>onMove(index, index-1):null}>
                                <i className="material-icons">arrow_upward</i>
                            </button>
                            <button type="button" className="btn waves-effect waves-light"
                                    onClick={index < children.length -1? ()=>onMove(index, index+1): null}>
                                <i className="material-icons">arrow_downward</i>
                            </button>
                        </div>
                        : null
                }
                {child}
            </div>)}
            {
                !disabled && updating ? <button type="button" className="btn waves-effect waves-light"
                                                style={{marginTop: '10px'}}
                                                onClick={()=>onInsert(children.length)}>
                    <i className="material-icons">add</i>
                </button> : null
            }
        </div>
    }
}

Array.propTypes = propTypes;
Array.defaultProps = defaultProps;

const ArrayItemActions = ({children}) => {
    return <div {...{
        className: 'array-item-actions',
        style: {marginBottom: '10px', marginTop: '10px'}
    }}>{children}</div>
};

export default Array