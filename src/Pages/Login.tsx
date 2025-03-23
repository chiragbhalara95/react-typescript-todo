import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().min(6, "password must be at least 6 char").required("password is required")
});

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: yupResolver(schema),
    })

    const onSubmit = async(data: LoginForm) => {
        try{
            const response = await axios.post("https://api.example.com/login", data);
            login(response.data.token);
            navigate("/dashboard");
        } catch(error){
            alert("login failed")

        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} placeholder="Email"></input>
            <p>{errors.email?.message}</p>
    
            <input type="password" {...register("password")} placeholder="Password"></input>
            <p>{errors.password?.message}</p>
    
            <button type="submit">Login</button>
        </form>
    );
    
};


export default Login;