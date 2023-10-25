import { useState } from "react";

const FaqAccordionSingleCard = ({ question, answer }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const setOpen = () => setIsCollapsed(prev => !prev);

    return (
        <>                
            <div className="accordion-item">
                <h2 className="accordion-header" id={question.id} onClick={setOpen}>
                    <button className={`${isCollapsed ? "accordion-button collapsed" : "accordion-button"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${answer.id}`} aria-expanded={!isCollapsed} aria-controls={answer.id}>
                        {question.questionText}
                        </button>
                </h2>
                <div id={answer.id} className={`${isCollapsed ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby={question.id} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {answer.answerText}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqAccordionSingleCard;