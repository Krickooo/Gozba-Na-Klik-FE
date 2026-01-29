import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        setServerError("");
        try {
            await registerUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                username: data.username,
                password: data.password
            });
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                setServerError(error.response.data.message || "Registracija nije uspela");
            } else {
                setServerError("Greška pri povezivanju sa serverom");
            }
        }
    }

    return (
        <div>
            <h2>Registracija</h2>
            {serverError && <p>{serverError}</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Ime:</label>
                    <input
                        {...register("firstName", { required: "Ime je obavezno" })}
                    />
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>

                <div>
                    <label>Prezime:</label>
                    <input
                        {...register("lastName", { required: "Prezime je obavezno" })}
                    />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email je obavezan",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email format nije ispravan"
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Korisničko ime:</label>
                    <input
                        {...register("username", { required: "Korisničko ime je obavezno" })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <div>
                    <label>Lozinka:</label>
                    <input
                        type="password"
                        {...register("password", { required: "Lozinka je obavezna" })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div>
                    <label>Potvrda lozinke:</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Potvrda lozinke je obavezna",
                            validate: value =>
                                value === password || "Lozinke se ne poklapaju"
                        })}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                <button type="submit">Registruj se</button>
            </form>
        </div>
    );
};

export default RegisterForm;