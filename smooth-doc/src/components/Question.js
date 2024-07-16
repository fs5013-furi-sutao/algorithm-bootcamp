import React from 'react'
import { Code } from './Code' 

export const Answer = (props) => {
    if(props.imgSrc == null){
        return (
            <>
                <div className="answerHeader" >
                    実行結果
                </div>

                <Code>{ props.answer }</Code>
            </>
        )
    } else {
        return(
            <>
                <div className="flowchartImg">
                    <img src = {props.imgSrc} style={{}} />
                </div>

                <div className="answerHeader" >
                    実行結果
                </div>

                <Code>{ props.answer }</Code>
            </>
        )
    }
}

export const Question = (props)  => {
    if(props.opened) {
        return (
            <>
                <details open style={{pointerEvents:'none'}}>
                <summary> { props.question } </summary>             
                    {props.children}
                </details>
            </>
        )
    } else {
        return (
            <>
                <details>
                <summary> { props.question } </summary>             
                    {props.children}
                </details>
            </>
        )
    }
    
}
  
{/*
export const Question = (props)  => {
    if(props.imgSrc == null){
        return (
            <>
                <details>
                <summary> { props.question } </summary>                
                    <div style={{ width:'100%' ,
                            backgroundColor:'#666',
                            marginTop:'10px',
                            color:'white',
                            padding:'5px',
                            textAlign:'center',
                            borderRadius:'5px 5px 0 0'}}>
                        Answer
                    </div>
    
                    <Code>{ props.answer }</Code>
                </details>
            </>
        )
    } else {
        return (
            <>
                <details>
                <summary> { props.question } </summary>
                    <div style={{ width:'100%' ,
                            backgroundColor:'beige',
                            color:'white',
                            padding:'15px 0',
                            borderRadius:'0 0 5px 5px',
                            display:'flex',
                            justifyContent:'center'}}>
                        <img src = {props.imgSrc} style={{}} />
                    </div>
    
                    
    
                    <div style={{ width:'100%' ,
                            backgroundColor:'#666',
                            marginTop:'10px',
                            color:'white',
                            padding:'5px',
                            textAlign:'center',
                            borderRadius:'5px 5px 0 0'}}>
                        Answer
                    </div>
    
                    <Code>{ props.answer }</Code>
                </details>
            </>
        )
    }

}
*/}