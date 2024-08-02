import { useState } from "react";
function Main({id,ima,Description,price,name, interest, inoInterest}){
    const [readmore,setreadmore]= useState(false)
    const description =readmore ?Description:`${Description.substring(0,200)}...`;
    function readmoreHandler(){
        setreadmore(!readmore)
    }
    return(
        <div className="card">
            <img src={ima} className="image" alt="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <p className="tour-name">{name}</p>
                    <p className="tour-price">{price}</p>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore?`showless`:`show more`}
                    </span>
                </div>
            </div>
            <div className="buttons">
                <button className="btn-red" onClick={() => interest(id)}>Interested</button>
                <button className="btn-red" onClick={() => inoInterest(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Main;