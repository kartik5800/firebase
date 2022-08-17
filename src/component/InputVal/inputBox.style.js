import styled from "styled-components"
import { Input, FormFeedback, Button } from "reactstrap"


export const InputBoxStyle = styled(Input)`

 
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;


`

export const FormFeedbackBox = styled(FormFeedback)`

color : #cd0f18;
font-weight: 700;
display : ${props => props.error ? "block" : "none"}

`

