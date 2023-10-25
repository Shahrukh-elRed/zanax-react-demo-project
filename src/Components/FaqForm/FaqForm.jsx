import "./faq-form.scss";

const FaqForm = () => {
  return (
    <div className="card">
        <div className="card-header">
            <h3 className="card-title">Ask Question</h3>
        </div>
        <div className="card-body">
            <h5>If Your Query Not Clarifified Post Your Question, My Customer Support will help You</h5>
            <div className="pt-3">
                <div className="form-group">
                    <input type="text" className="form-control" id="name1" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="example-textarea-input" rows="6" placeholder="Post Your Query"></textarea>
                </div>
                <button onClick={() => console.log("submitted")} className="btn btn-primary">Send Question</button>
            </div>
        </div>
    </div>
  )
}

export default FaqForm;