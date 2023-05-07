// import Image from "next/image";
// import food from "/public/food0.png";
'use client'

import { useState } from "react";

export default function List(){
    let item = ['Tomatoes','Pasta','Coconut'];
    const [count,setCount] = useState([0,0,0]);

    return(
    <div className="m-0 bg-slate-500 min-h-screen flex flex-col justify-center items-center text-white">
        <div className="text-2xl mt-3 mb-5 font-bold">상품목록</div>
        {
            item.map((v,i)=>{
                return(
                <div className="m-5 w-52 bg-white text-black p-5 rounded-lg " key={i}>
                    <img src={`/food${i}.png`}className=" w-full h-auto" />
                <p className="font-bold"> {item[i]} $40</p>
                <span className="font-bold m-2"> {count[i]}</span>
                <button className="bg-red-300 h-8 w-5 ml-2 border px-1 border-red-500" onClick={()=>{
                    const copyCount = [...count]; //어레이나 오브젝트 스테이트 변경하려면 카피본을 만들고 ...이거 써주기
                    copyCount[i]++
                    setCount(copyCount);
                }}> + </button>
                <button className="bg-red-300 h-8 w-5 ml-2 border px-1 border-red-500" onClick={()=>{
                    const copyCountmana = [...count];
                    copyCountmana[i]--
                    setCount(copyCountmana);
                }}> - </button>

                </div>
                )
            }) 
        }
    </div>
    )
}