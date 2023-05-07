//'use client' // 이걸 사용하면 클라이언트 컴포넌트

// 서브컴포넌트는 html에 자바스크립트를 사용할수가 없음. 장점 로딩속도가 빠름 검색엔진 노출유리
// 클라이언트컴포넌트는 자바스크립트 기능을 다 가능함. 로딩속도가 느리고 자바스크립트가 많이 필요 하이드레이션을걸처서 로딩속도가 느림

// import {age,name} from "./data.js";
// import { useState } from "react";
import CartItem from "./cartItem.js";

// const [color, setColor] = useState("");

// function cheBtn(){
//     setColor("");
// }

export default function cart(){
    let item =['Tomatoes', 'pasta'];
    let card =["현대카드","롯데카드","삼성카드"]
    return(
        <>
        <div className="m-0 bg-slate-500 min-h-screen justify-center items-center text-white">
        <div className="text-2xl mb-5 font-bold p-2  text-center">Cart</div>
            <CartItem item={item[0]} /> 
            <CartItem item={item[1]} /> 
            <Card card={card[0]}/>
            <Card card={card[1]}/>
            <Card card={card[2]}/>
            <Btn color="blue"/>
        </div>
        </>
    );
}

function Card({card}){
    return(
        <div>{card} 결제 행사중</div>
    )
}

function Btn(props){
    return <button style={{background:props.color}}>BTN</button>
}

