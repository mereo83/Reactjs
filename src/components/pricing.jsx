export const Pricing = (props) => {
  return (
    <div class="container">
       <div class="col">
     <div className={`card mb-4 rounded-3 shadow-sm ${props.highlight ? 'border-primary' : ''}`}>
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{props.planName}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.price}<small className="text-muted fw-light">/mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{props.users} users included</li>
          <li>{props.storage} GB of storage</li>
          <li>{props.support}</li>
          <li>{props.helpCenter}</li>
        </ul>
        <button type="button" className={`w-100 btn btn-lg ${props.highlight ? 'btn-primary' : 'btn-outline-primary'}`}>
          {props.buttonText}
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};
