import { Component, useReducer, useEffect} from 'react'
import styles from './textAnimate.module.css'

const titles = ["web developer", "mobile app developer", "seo expert"]
const init = {
    titles: titles,
    titlesCount: titles.length,
    curTitlte: 0,
    text: titles[0],
    textLength: titles[0].length,
    letterCount: 0,
    curText: "web developer",
    direction: "right",
}

function reducer(state, action) {
    switch (action.type) {
        case "add" : {
            const limit = state.curText.length + 1
            const count = state.letterCount + 1  
            if (count > state.textLength + 15) {
                return {...state, direction: "left", letterCount: 0}
            } else if(limit <= state.textLength + 1) {
                return {...state, curText: state.text.substring(0, limit), letterCount: count}
            } else {
                return {...state, letterCount: count}
            }
        }
        case "remove" : {
            const limit = state.curText.length - 1
            if (limit === -1) {
                let next = state.curTitlte < state.titlesCount - 1 ? state.curTitlte + 1 : 0;
                let nextText = state.titles[next]
                let nextTextLength = nextText.length
                return {...state, curTitlte: next, text: nextText, textLength: nextTextLength, direction: "right"}
            } else {
                return {...state, curText: state.text.substring(0, limit)}
            }
        }
    }
}

export default function TextAnimate() {
    const [state, dispatch] = useReducer(reducer, init)

    useEffect(() => {
        const timer = setInterval(function () {
            if (state.direction === "right") {
                dispatch({type: "add"})
            } else {
                dispatch({ type: "remove" })
            }
        }, 100)
        return () => {
            clearInterval(timer)
        }
    }, [state.direction])

    return (
        <em className={styles.animateText}>{ state.curText }</em>
    )
}
