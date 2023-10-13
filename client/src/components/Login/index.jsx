/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Fondo, ContainerPrincipal, Title, Containerinput, Input, Label, Button, Navigation } from "./styled";
const Login = () => {
    return(
        <Fondo>
            <ContainerPrincipal>
                <Title>Login</Title>
                <Containerinput>
                    <Label>Usuario</Label>
                    <Input placeholder="Correo"/>
                    <Label>Contraseña</Label>
                    <Input placeholder="Contraseña"/>
                </Containerinput>
                    <Button>Login</Button>
                    <Navigation to="/register">
                    Register
                    </Navigation>
            </ContainerPrincipal>
        </Fondo>
    )
}

export default Login