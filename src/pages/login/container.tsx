import * as React from 'react';
import { default as TouchBackend } from 'react-dnd-touch-backend';

import Dustbin from './Dustbin'
import Box from './box'
import { DragDropContext } from 'react-dnd';



class Container extends React.Component<{}, {}> {
    constructor() {
        super();

    }
    render() {
        return (

            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Dustbin />
                </div>
                <div style={{ overflow: 'auto', clear: 'both' }}>
                    <Box name="Glass" />
                    {/* <Box name="Banana" />
                    <Box name="Paper" />
                    <Box name="zxl" /> */}
                </div>
            </div>

        )
    }
}
export default DragDropContext(TouchBackend)(Container);