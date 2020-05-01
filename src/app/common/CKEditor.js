
import React, {Component} from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.editor = React.createRef();
    }

    componentWillUpdate(nextProps) {
        if(this.editor.current) {
            if(nextProps.value !== this.props.value) {
                var data = this.editor.current.editor.getData();
                if(data !== nextProps.value) {
                    this.editor.current.editor.setData(data);
                }
            }
        }

        return false;
    }

    render() {
        return <CKEditor
            ref={this.editor}
            editor={ ClassicEditor }
            data={(this.initialData || (this.initialData = this.props.value)) || ""}
            onChange={( event, editor ) => {
                const data = editor.getData();
                this.props.onChange(data);
            }}
        />
    }
}
