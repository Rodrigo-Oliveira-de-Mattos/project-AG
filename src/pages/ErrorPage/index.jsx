import styled from "styled-components"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <DivError>
            <H1>Error 404!</H1>
            <H2>Page not found</H2>
            <B><Link to="/">🤖</Link></B>
        </DivError>
    )
}

const DivError = styled.div`
    background-color: #242424;
    color: #d2d2d2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const H1 = styled.h1`
    font-size: 6em;
    margin-bottom: 1.3em;
`
const H2 = styled.h2`
    font-size: 4em;
    margin-bottom: 0.8em;
`

const B = styled.b`
    font-size: 15em;
    transition: .5s ease;
    &:hover{
        transform: scale(1.2);
        transition: .5s ease;
    }
`

export default ErrorPage