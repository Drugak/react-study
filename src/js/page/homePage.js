import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

let HomePageButtons = React.createClass({
    render: function( ) {
        return (
            <div>
                <RaisedButton label="Default" fullWidth={true} linkButton={true} href={'http://google.com'} backgroundColor={'#A900FF'}/>
                <RaisedButton label="Primary" fullWidth={true}/>
            </div>
        )
    }
});
export default HomePageButtons ;
