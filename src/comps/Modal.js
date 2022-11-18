
function Modal(props) {
  
    
  
    return ( 
        
        
            <div className="modal fade bd-example-modal-sm" id="modaling" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div id="abc" className="modal-dialog modal-sm">
                    <div className="modal-content">
                        
                        <img  src={props.img}/>
                        <div className="yazi">
                            <h1>{props.name}</h1>
                            <p>{props.des}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        
  )
}

export default Modal


