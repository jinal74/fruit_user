import { Button } from "reactstrap";
import styled from "styled-components";

const BaseButton = styled(Button)`
    display: inline-block;
    border-radius: 50px;
    font-size: 14px;
    border: none;
    transition: all 0.3s ease-in-out;
    text-align: center;

    :focus {
        box-shadow: none;
        color: F28123;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: #F28123;
    padding: 10px 20px;
    color: #ffffff;

    :hover {
        background-color: transparent;
        color: #F28123;
        border: 1px solid #F28123;
    }
`;

export const BorderButton = styled(BaseButton)`
    background-color: transparent;
    color: #ffffff;
    padding: 10px 20px;
    border: 1px solid #F28123;

    :hover {
        background-color: #F28123;
        color: #ffffff;
        border: none;
    }
`;

export const LinkButton = styled(BaseButton)`
    background: none;
    color: #000000;
    padding: 10px;
    font-weight: 700;
    text-decoration: none;

    :hover {
        color: #F28123;
        background: none;
    }
`;