import React from "react";
import { Fondo, ContainerPrincipal, Title, Containerinput, Input } from "./styled";

const Login = () => {
    return(
        <Fondo>
            <ContainerPrincipal>
                <Title>Login</Title>
                <Containerinput>
                    <Input></Input>
                    <Input></Input>
                </Containerinput>
            </ContainerPrincipal>
        </Fondo>
    )
}

export default Login