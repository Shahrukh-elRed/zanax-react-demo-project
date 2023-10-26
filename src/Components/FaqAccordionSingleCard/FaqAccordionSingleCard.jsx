const FaqAccordionSingleCard = ({ question, answer, handleAccordionClick, openAccordion }) => {
    return (
        <>                
            <div className="accordion-item">
                <h2 className="accordion-header" id={question.id} onClick={() => handleAccordionClick(question.id)}>
                    <button className={`${openAccordion !== question.id ? "accordion-button collapsed" : "accordion-button"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${answer.id}`} aria-expanded={openAccordion === question.id} aria-controls={answer.id}>
                        {question.questionText}
                        </button>
                </h2>
                <div id={answer.id} className={`${openAccordion !== question.id ? "accordion-collapse collapse" : "accordion-collapse collapse show"}`} aria-labelledby={question.id} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {answer.answerText}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqAccordionSingleCard;