import {clientReviews} from "../constants/index"

const Clients = () => {
  return (
    <section className='c-space my-20'>
        <h3 className='head-text'> Hear from my Clients</h3>
        <div className='client-container'>
            {clientReviews.map(({id,name,review , img,position})=> (
                <div key={id} className='client-review'>
                    <div>
                        <p className='text-white font-light'>{review}</p>
                        <div className='client-content'>
                            <div className='flex gap-0'>

                                <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white">{position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
        

            ))}

        </div>
      
    
    </section>
  )
}

export default Clients
