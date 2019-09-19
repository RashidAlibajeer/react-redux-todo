import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { borderRadius } from '@material-ui/system';

export default class Input extends React.Component {
    render() {
        const useStyles = makeStyles(theme => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            dense: {
                marginTop: theme.spacing(2),
            },
            menu: {

            },
        }));
       
        
        return (


            // <input value={this.props.value} onChange={this.props.onChange} placeholder='add todo' />





            <TextField style={{ width: "400px", fontSize:"22px", fontWeight:"bold" }}
                id="outlined-email-input"
                label="ADD TODO"
                // className={classes.textField}
                type="text"
                name="text"
                autoComplete="text"
                margin="center"
                variant="outlined"
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}


