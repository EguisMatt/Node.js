import React from "react";
import {Fondo, ContainerPrincipal, Title, Containerinput, Label, Input, Button} from "../login/styled.jsx" 
const Recovery = () => {
    return (
        <Fondo>
            <ContainerPrincipal>
                <Title>Recovery Password</Title>
                <Containerinput>
                    <Label>Correo</Label>
                    <Input placeholder="Ingrese correo existente"/>
                    <Label>Contraseña</Label>
                    <Input placeholder="Contraseña"/>
                </Containerinput>
                    <Button>Login</Button>
            </ContainerPrincipal>
        </Fondo>
    );
};

export default Recovery;