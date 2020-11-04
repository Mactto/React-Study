const React = require('react');
const { useState, useRef } = React

const WordRelay = () => {
    const[word, setWord] = useState('제로초');
    const[value, setValue] = useState('');
    const[result, setResult] = useState('');
    const inputRef = useRef(null);

    onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
        <div>{word}</div>
        <form onSubmit={this.onSubmitForm}>
            <input ref={inputRef} value={value} onChange={onChangeInput}></input>
            <button>클릭</button>
        </form>
        <div>{result}</div>
        </div>
    );
};

module.exports = WordRelay;