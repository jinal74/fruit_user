import styled from "styled-components";
import { FormFeedback, Input } from "reactstrap";

export const InputBoxStyle = styled(Input)`
    width: 50%;
    height: 50px;
    padding: 15px;
    border: 1px solid #dddddd;
    border-radius: 5px;

    :focus {
        border: 1px solid #F28123 !important;
        box-shadow: none;
    }
`;

export const InputBoxError = styled(FormFeedback)`
    color: red;
    display: ${props => props.display.errors ? 'flex' : 'none'}
`;