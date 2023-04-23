import { Route, Navigate } from "react-router-dom";
function ProtectedRoute ({ component: Component, ...props }) {
    return(
        <Route>
            {
                () => (props.logIn ? <Component {...props} /> : <Navigate to='/sign-in' />)
            }
        </Route>
    )
}

export default ProtectedRoute