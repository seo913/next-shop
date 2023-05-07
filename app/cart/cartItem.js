// 프롭스는 최상위 컴포넌트에서 자식 컴포넌트로 보낼수 있음  최상위 장바구니

export default function CartItem(props){
    // let tem = [1,2,3,4,5];

    return(
        <>
            <div className="text-2xl mb-5 font-bold p-2 flex justify-around border-b border-l-inherit">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
            </div>
        
        </>
    )
}



        // tem.map((v,i)=>{
        //     return(
        //     <div className="text-2xl mb-5 font-bold p-2 flex justify-around border-b border-l-inherit">
        //     <p>{cart1[1]}</p>
        //     <p>$40</p>
        //     <p>1개</p>
        //     </div>
        //     )
        // })