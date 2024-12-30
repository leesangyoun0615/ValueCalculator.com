import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import ResultPbr from "./components/Result/ResultPbr.jsx";
import { useState } from "react";
import TabButton from "./components/TabContent.jsx/TabButton.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    discountRate: "",
    returnOnEquity: "",
    expectedSustainabilityPeriod: "",
    priceBookValueRatio: "",
  });
  const [selectedTopic, setSelectedTopic] = useState("PBR");

  function handleChange(inputIdentifier, newValue) {
    // 숫자와 소수점만 허용
    let cleanedValue = newValue.replace(/[^0-9.]/g, "");

    // 소수점이 여러 개 있는지 확인하고 처리
    const parts = cleanedValue.split(".");
    if (parts.length > 2) {
      cleanedValue = parts[0] + "." + parts.slice(1).join("");
    }

    // 상태 업데이트
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: cleanedValue,
    }));
  }

  function handleSelect(selectedButton) {
    handleReset();
    setSelectedTopic(selectedButton);
  }

  console.log(userInput);

  let inputIsValid;

  if (selectedTopic === "PBR") {
    inputIsValid =
      userInput.discountRate > 0 &&
      userInput.returnOnEquity > 0 &&
      userInput.expectedSustainabilityPeriod > 0;
  } else if (selectedTopic === "Annual Yield") {
    inputIsValid =
      userInput.priceBookValueRatio > 0 &&
      userInput.returnOnEquity > 0 &&
      userInput.expectedSustainabilityPeriod > 0;
  }
  function handleReset() {
    setUserInput({
      discountRate: "",
      returnOnEquity: "",
      expectedSustainabilityPeriod: "",
      priceBookValueRatio: "",
    });
  }

  console.log(selectedTopic);
  console.log(userInput);

  return (
    <>
      <Header selectedTopic={selectedTopic} />
      <main>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "PBR"}
              onSelect={() => handleSelect("PBR")}
            >
              PBR
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Annual Yield"}
              onSelect={() => handleSelect("Annual Yield")}
            >
              Annual Yield
            </TabButton>
          </menu>
        </section>

        <UserInput
          selectedTopic={selectedTopic}
          userInput={userInput}
          onChange={handleChange}
          handleReset={handleReset}
        />

        {!inputIsValid && (
          <p className="center">Please enter values greater than zero.</p>
        )}
        {inputIsValid && (
          <ResultPbr input={userInput} selectedTopic={selectedTopic} />
        )}
      </main>
    </>
  );
}

export default App;
