
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Questions = ({title,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false)
    return (
        <div className="question" >
            <div className='question-title'>
                <h2>{title}</h2>
                <button onClick={() => setShowAnswer(!showAnswer)} type="">
                  {showAnswer ?<AiOutlineMinus color='crimson' size={20}/> :  <AiOutlinePlus color='#2da5ff' size={20} />}
                    </button>
            </div>
            {
                showAnswer ? <div style={{ height: "auto", padding: "10px" }} className='question-answer'><p>{answer}</p></div>
                    :
                    <div style={{ height: "0", overflow: "hidden" }} className='question-answer'><p>{answer}</p></div>
            }
        </div>
    )
}

export default Questions