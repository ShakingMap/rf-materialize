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
            // move, add or remove
            editMode: ''
        }
    }

    render() {
        const {validationState, onInsert, onRemove, onMove, children, disabled} = this.props;
        const {editMode} = this.state;

        return <div className="card-panel">
            <div className="array-actions" style={{marginBottom: '10px'}}>
                {
                    !disabled ?
                        !children.length ?
                            <button type="button" className="btn waves-effect waves-light" onClick={()=>onInsert(0)}>
                                <i className="material-icons">add</i>
                            </button>
                            :
                            !editMode ? [
                                <button key={0} type="button" style={{marginRight: '10px'}}
                                        className="btn waves-effect waves-light"
                                        onClick={()=>this.setState({editMode: 'add'})}>
                                    <i className="material-icons">add</i>
                                </button>,
                                <button key={1} type="button" style={{marginRight: '10px'}}
                                        className="btn waves-effect waves-light"
                                        onClick={()=>this.setState({editMode: 'remove'})}>
                                    <i className="material-icons">remove</i>
                                </button>,
                                <button key={2} type="button" className="btn waves-effect waves-light"
                                        onClick={()=>this.setState({editMode: 'move'})}>
                                    <i className="material-icons">swap_vert</i>
                                </button>
                            ]
                                :
                                <button type="button" className="btn waves-effect waves-light"
                                        onClick={()=>this.setState({editMode: null})}>
                                    <i className="material-icons">done</i>
                                </button>
                        :
                        null
                }
            </div>
            {children.map((child, index)=><div key={index}>
                {
                    !disabled && editMode === 'add' ?
                        <button type="button" className="btn waves-effect waves-light" style={{marginBottom: '10px'}}
                                onClick={()=>onInsert(index)}>
                            <i className="material-icons">add</i>
                        </button> : null
                }
                <div>
                    {
                        !disabled && editMode === 'remove' ?
                            <ArrayItemActions>
                                <button type="button" className="btn red waves-effect waves-light"
                                        onClick={()=>onRemove(index)}>
                                    <i className="material-icons">remove</i>
                                </button>
                            </ArrayItemActions> : null
                    }
                    {
                        !disabled && editMode === 'move' ?
                            <ArrayItemActions>
                                <button key={0} type="button" className="btn waves-effect waves-light"
                                        style={{marginRight: '10px'}}
                                        onClick={index > 0 ? ()=>onMove(index, index-1):null}>
                                    <i className="material-icons">arrow_upward</i>
                                </button>
                                <button key={1} type="button" className="btn waves-effect waves-light"
                                        onClick={index < children.length -1? ()=>onMove(index, index+1): null}>
                                    <i className="material-icons">arrow_downward</i>
                                </button>
                            </ArrayItemActions> : null
                    }
                    <div style={{width: '100%'}}>
                        {child}
                    </div>
                </div>
            </div>)}
            {
                !disabled && editMode === 'add' ? <button type="button" className="btn waves-effect waves-light"
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