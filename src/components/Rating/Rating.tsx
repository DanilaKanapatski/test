import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props:RatingPropsType) {
    console.log('Rating rendering')
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: true | false
}

function Star(props:StarPropsType) {
    console.log('Star rendering')
    if (props.selected) {
        return <span><b>Star </b></span>
    } else return <span>Star </span>
}