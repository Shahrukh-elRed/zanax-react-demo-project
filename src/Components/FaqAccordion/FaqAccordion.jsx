import FaqAccordionSingleCard from "../FaqAccordionSingleCard/FaqAccordionSingleCard";
import "./faq-accordion.scss";

const FaqAccordion = ({ title, data }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <div className="accordion" id="accordionExample">
                    {data.map(item => <FaqAccordionSingleCard key={item.question.id} question={item.question} answer={item.answer} />)}
                </div>
            </div>
        </div>
    )
}

export default FaqAccordion;