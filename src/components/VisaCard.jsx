const VisaCard = ({ visa }) => {
  const {
    country_image,
    country_name,
    visa_type,
    processing_time,
    fee,
    validity,
  } = visa;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="">
        <img className="ml-0" src={country_image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase">{country_name}</h2>
        <p>{visa_type}</p>
        <p>{processing_time}</p>
        <p className="badge badge-primary">${fee}</p>
        <p>{validity}</p>
        <div className="card-actions">
          <button className="btn btn-neutral">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
