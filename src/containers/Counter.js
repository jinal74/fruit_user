import React, { useEffect, useState } from 'react';
import Button, { ButtonType } from '../components/common/Button/Button';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect (
        () => {
            if (count === 0) {
                setDisable(true);
            } else {
                setDisable(false);
            }
        }
    )
    const handleIncrement = () => {
      setCount(count+1);
    }
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count-1);
      }
    }

    return (
        <section className='bg-dark'>
            <div className="container pt-150 pb-100">
                <div className='counter mx-auto'>
                    <h1>{count}</h1>
                    <Button disabled={disable} buttonType={ButtonType.Primary} onClick={() => handleDecrement()}>Decrement</Button>
                    <Button buttonType={ButtonType.Primary} onClick={() => handleIncrement()}>Increment</Button>
                </div>
            </div>
        </section>
    );
}

export default Counter;