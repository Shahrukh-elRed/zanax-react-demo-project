import "./card-with-image.scss";

const CardWithImage = ({ title, text, footerText, bgImage }) => {
  return (
    <div className="col-md-12 col-xl-4">
        <div className="card card-blog-overlay1" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="card-body text-white">
                <h3 className="card-title text-white">{title}</h3>
                {text}
            </div>
            <div className="card-footer  text-white z-index2 border-transparent">
                {footerText}
            </div>
        </div>
    </div>
  )
}

export default CardWithImage;