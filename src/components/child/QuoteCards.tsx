import { QuoteCardsProps  } from "@/context/contextTypes";
import { User } from "lucide-react";

const QuoteCards = ({generatedQuotes,tags}:QuoteCardsProps) => {
  return (
    <>
    <div>
      {generatedQuotes.map((q, id) => (
        <div className="quote-header" key={id}>
          <h1 className="quote-statement">"{q.content}"</h1>
          <div className="quote-author-name">
            <User />
            <p>{q.author}</p>
          </div>
        </div>
  ))}
    </div>
    <div className="flex justify-evenly my-2 md:my-0 gap-2">
        {tags.flat().map((t, id) => 
        {
          return (<span className="quote-tags bg-secondary-glass"
          key={id}>{t}</span>)
        }
       )}
    </div>
    </>
  )
}

export default QuoteCards;
