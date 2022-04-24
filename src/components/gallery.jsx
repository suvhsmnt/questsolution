import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Carrer</h2>
          <p>
          {props.data
              ? props.data.title
              : 'Loading...'}
          </p>
          <p>
          Please drop an email for any query related carrier to 
          </p>
          <h3 style={{ color: 'red' }}>recruitment.questsolutions@gmail.com </h3>
          
        </div>
        {/* <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div> */}
      </div>
    </div>
  )
}
