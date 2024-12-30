import "../UserInput/UserInput.css";

export default function UserInput({
  onChange,
  userInput,
  handleReset,
  selectedTopic,
}) {
  let content;

  if (selectedTopic === "PBR") {
    content = (
      <p>
        <label>(r)Discount Rate(%)</label>
        <input
          type="number"
          placeholder="Required"
          required
          value={userInput.discountRate}
          onChange={(event) => onChange("discountRate", event.target.value)}
        />
      </p>
    );
  } else if (selectedTopic === "Annual Yield") {
    content = (
      <p>
        <label>PBR(priceBookValueRatio)</label>
        <input
          type="number"
          placeholder="Required"
          required
          value={userInput.priceBookValueRatio}
          onChange={(event) =>
            onChange("priceBookValueRatio", event.target.value)
          }
        />
      </p>
    );
  }

  return (
    <>
      <section id="user-input">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            {content}
            <p>
              <label>ROE(Return on Equity)</label>
              <input
                type="number"
                placeholder="Required"
                required
                value={userInput.returnOnEquity}
                onChange={(event) =>
                  onChange("returnOnEquity", event.target.value)
                }
              />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label>(n)Expected sustainability period (years)</label>
              <input
                type="number"
                placeholder="Required"
                required
                value={userInput.expectedSustainabilityPeriod}
                onChange={(event) =>
                  onChange("expectedSustainabilityPeriod", event.target.value)
                }
              />
            </p>
          </div>
          <div className="buttonArray">
            <button type="reset" className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
