import React from 'react';
import { InputBoxError, InputBoxStyle } from './InputBox.style';

function InputBox({children,errors=false, errorMessage='' , ...rest}) {
    console.log(errorMessage)
    return (
    <>
        <InputBoxStyle {...rest}>
            {children}
        </InputBoxStyle>
        <InputBoxError
            display={{errors: errors}}
        >
            {errorMessage}
        </InputBoxError>
    </>
    );
}

export default InputBox;