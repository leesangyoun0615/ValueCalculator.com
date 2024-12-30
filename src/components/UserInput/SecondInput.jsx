import "../UserInput/UserInput.css";

export default function UserInput({
  onChange,
  userInput,
  handleReset,
  isSelected,
}) {
  return (
    <>
      <section id="user-input">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <p>
              <label className={isSelected ? "PBR" : undefined}>
                (r)Discount Rate(%)
              </label>
              <input
                type="text"
                placeholder="Required"
                required
                value={userInput.discountRate}
                onChange={(event) =>
                  onChange("discountRate", event.target.value)
                }
              />
            </p>
            <p>
              <label>ROE(Return on Equity)</label>
              <input
                type="text"
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
                type="text"
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
