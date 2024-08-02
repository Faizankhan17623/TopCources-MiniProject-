import Card from './card'
function Cardss({tours,interest,inoInterest}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan WITH us</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return (
                            <Card key ={tour.id} {...tour} interest={interest} inoInterest={inoInterest}></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cardss;