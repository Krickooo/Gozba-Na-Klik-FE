import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Dobrodošli</h1>
            <p>Registrujte se ili se prijavite kako biste nastavili</p>

            <button onClick={() => navigate("/register")}>
                Registruj se
            </button>

            <button onClick={() => navigate("/login")}>
                Prijavi se
            </button>
        </div>
    );
};

export default Welcome;