import * as React from 'react';
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
    border: '1px dashed black',

    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    background: `url(/dist/images/av.png)`
}

const boxSource = {
    beginDrag(props: any) {
        return {
            name: props.name,
        }
    },

    endDrag(props: any, monitor: any) {
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()

        if (dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`) // eslint-disable-line no-alert
        }
    },


}

class Box extends React.Component<{
    name: string,
    isDragging?: boolean,
    connectDragSource?: any,
    connectDragPreview?: any

}, {}>{
    // componentDidMount() {

    //     const img = new Image();

    //     img.onload = () => this.props.connectDragPreview(img)
    //     img.src = `/dist/images/av.png`;

    // }


    render() {
        const { isDragging, connectDragSource, connectDragPreview } = this.props;
        const { name } = this.props;
        const opacity = isDragging ? 0.4 : 1


        return connectDragPreview(<div>{connectDragSource(<div style={{ ...style, opacity }}>{name}</div>)}</div>)
    }
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => {

    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview(),
    }

})(Box);