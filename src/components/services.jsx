export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          Content Development can be really tough and time taking matter. If you are struggling to develop handsome quality of content, we are here and happily ready to help you!
          </p>
        </div>
        <div className='row '>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='card justify-content-around' >
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
            </div>
      </div>
    </div>
  )
}
