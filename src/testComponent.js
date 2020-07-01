// BOILER-PLATE CODE FOR HOW TO USE REDUX + API IN A COMPONENT IN THIS PROJECT

// import React from 'react'
// import * as actions from './redux/actions/actions'
// import * as api from "./api/api"
// import {connect} from "react-redux"
//
// const testComponent = props => {
//     props.onInitPurchase()
//     api.testRequest()
//     return (
//         <div>
//             <p>{props.setup}</p>
//         </div>
//     )
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actions.testAction())
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         setup: state.setup,
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(testComponent)