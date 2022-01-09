import React from 'react';
import { BorderButton, PrimaryButton, LinkButton } from './Button.style';

export const ButtonType = {
    Primary : "PRIMARY",
    Border : "BORDER",
    Link : "LINK"
}

function Button({buttonType, children, ...rest}) {
    if (buttonType === ButtonType.Primary) {
        return (
            <PrimaryButton
                {...rest}
            >
                {children}
            </PrimaryButton>
        )
    } else if (buttonType === ButtonType.Border) {
        return (
            <BorderButton
                {...rest}
            >
                {children}
            </BorderButton>
        )
    } else if (buttonType === ButtonType.Link) {
        return (
            <LinkButton
                {...rest}
            >
                {children}
            </LinkButton>
        )
    }
    return (
        <>
            
        </>
    );
}

export default Button;
