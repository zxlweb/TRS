import * as React from 'react';
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    overflow: 'auto !important'
}

const boxTarget = {
    drop() {
        return { name: 'Dustbin' }
    }
}

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget()
}))
export default class Dustbin extends React.Component<{
    connectDropTarget?: any,
    isOver?: boolean,
    canDrop?: boolean
}, {}>{


    render() {
        const { canDrop, isOver, connectDropTarget } = this.props
        const isActive = canDrop && isOver

        let backgroundColor = '#222'
        if (isActive) {
            backgroundColor = 'darkgreen'
        } else if (canDrop) {
            backgroundColor = 'darkkhaki'
        }

        return connectDropTarget(<div style={{ ...style, backgroundColor }}> {isActive ? 'Release to drop' : 'Drag a box here'}  </div>)
    }
}