import LoginForm from "../../components/LoginForm";

function Login({ setUser, user }) {
    return (
        <>
            <h1>Login</h1>
            <LoginForm setUser={setUser} user={user} />
        </>
    );
};

export default Login;