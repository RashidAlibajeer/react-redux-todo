

const initialState = {
    list: [],
}



const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case "allData":
            state.list.push(action.payload)
            return { ...state, list: state.list.concat() }

        case "add":
            return { ...state, list: state.list.concat() }
        case 'edit':
            state.list[action.payload].edit = false
            return { ...state, list: state.list.concat() }

        case 'cancel':
            state.list[action.payload].edit = true
            return { ...state, list: state.list.concat() }

        case 'delete':
            state.list.splice(action.payload, 1)
            return { ...state, list: state.list.concat() }

        case 'update':
            state.list.splice(action.payload.ind, 1, (action.payload.obj))
            console.log(state.list)
            return { ...state, list: state.list.concat() }



        default: return state
    }

}


export default Reducer




// const initialState = {
//     list: [],
//     name: 'sau'
// }



// const Reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case "add":
//             state.list.push({ name: action.payload,edit:true })
//             return { ...state, list: state.list }
//             break
//         case 'edit':
//             state.list.splice(action.payload.ind, 1)
//             state.list.push({ name: action.payload.update })
//             return { ...state, list: state.list }

//             break
//         case 'delete':
//             state.list.splice(action.payload.ind, 1)
//             return { ...state, list: state.list }



//         default: return state
//     }

// }


// export default Reducer