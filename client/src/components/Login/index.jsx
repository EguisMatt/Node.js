import React from "react";
import { Fondo, ContainerPrincipal, Title, Containerinput, Input, Label, Button } from "./styled";

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
                    <Button>registrate</Button>
            </ContainerPrincipal>
        </Fondo>
    )
}

export default Login