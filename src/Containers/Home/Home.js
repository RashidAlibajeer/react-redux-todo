import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from '../../Components'

import { addTodo, deleteTodo, editTodo, cancelUpdate, addUpdate, getData } from '../../Store/Action'



class Home extends React.Component {


    constructor() {
        super()
        this.state = {
            val: '',
            name: '',

        }

    }

    componentDidMount() {
        this.props.getData()
    }



    add = () => {
        this.props.addTodo(this.state.name)
        this.setState({
            name: ''
        })
    }


    edit = () => {
        this.props.addUpdate(this.state.update)
    }



    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <Input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <Button click={this.add} >Add
                </Button>

                {
                    this.props.todos.map((val, ind) => {
                        return <div key={ind}>
                            {
                                val.edit ? <div>

                                    <input value={val.name} disabled={val.edit}
                                        style={{ width: "200px", height: "40px", marginRight: '-3px', borderRadius: '10px' }} />

                                    <Button click={() => this.props.deleteTodo(val, ind)}>Delete</Button>
                                    <Button click={() => {
                                        this.setState({
                                            update: val.name
                                        })
                                        this.props.editTodo(ind, val)
                                    }} >Edit</Button>

                                </div>
                                    :

                                    <div style={{ marginLeft: "0px" }}>
                                        <input value={val.update} disabled={val.edit}
                                        
                                            onChange={(e) => this.setState({ update: e.target.value })}
                                        style={{ width: "200px", height: "40px", marginRight: '-3px', borderRadius: '10px' }} />

                                        <Button click={() => this.props.addUpdate(this.state.update, ind, val)}>update</Button>
                                        <Button click={() => this.props.cancelUpdate(ind, val)}> cancel  </Button>
                                    </div>


                            }
                        </div>




                        // <li key={ind}>
                        //     {val.name}
                        //     <Button click={() => this.props.deleteTodo(val, ind)}>Delete</Button>
                        //     <Button click={() => this.props.editTodo(val, ind)}>Edit</Button>
                        // </li>

                    })

                }

            </div>
        )
    }
}



const mapStateToProps = data => {
    return {
        todos: data.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (name) => dispatch(addTodo(name)),
        deleteTodo: (val, ind) => dispatch(deleteTodo(val, ind)),
        editTodo: (ind, val) => dispatch(editTodo(ind, val)),
        addUpdate: (updateval, ind, val) => dispatch(addUpdate(updateval, ind, val)),
        cancelUpdate: (ind, val) => dispatch(cancelUpdate(ind, val)),
        getData: () => dispatch(getData()),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)