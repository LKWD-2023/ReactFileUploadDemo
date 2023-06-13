import React, { useState, useEffect, useRef } from 'react';

const Home = () => {

    const ref = useRef(0);

    const textboxRef = useRef(null);

    const [text, setText] = useState('');

    useEffect(() => {
        ref.current++;
    }, [text]);

    const onRefButtonClick = () => {
        //console.log(textboxRef.current);
        textboxRef.current.focus();
    }

    const onScrollClick = () => {
        textboxRef.current.scrollIntoView();
    }

    return <>
        <div className='row'>
            <div className='col-md-6'>
                <input onChange={e => setText(e.target.value)} type='text' className='form-control' />
            </div>
            <div className='col-md-3'>
                <h1>{text}</h1>
            </div>
            <div className='col-md-3'>
                <h1>{ref.current}</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-3'>
                <button className='btn btn-primary'>Click me</button>
            </div>
            <div className='col-md-3'>
                <button className='btn btn-danger' onClick={() => ref.current += 10}>Change Ref By 10</button>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-12'>
                <button className='btn btn-dark w-100' onClick={onScrollClick}>Scroll</button>
            </div>
        </div>

        <div className='row mt-5'>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>

        </div>


        <div className='row mt-5'>
            <div className='col-md-3'>
                <button className='btn btn-dark' onClick={onRefButtonClick}>Click me</button>
            </div>
            <div className='col-md-3'>
                <input ref={textboxRef} className='form-control' type='text' placeholder='Enter some text' />
            </div>
        </div>
    </>


}

export default Home;