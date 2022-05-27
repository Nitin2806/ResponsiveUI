import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const [boldText, setBoldText] = useState(false);

  const bold = (e) => {
    //function for getting text bold
    setBoldText(!boldText);
    console.log(boldText);
    if (e.target.id === "firstrow") {
      // passign ids for onclick in if & else
      document.getElementById("one").style.fontWeight = "900";
    } else if (e.target.id === "secondrow") {
      document.getElementById("two").style.fontWeight = "900";
    } else if (e.target.id === "thirdrow") {
      document.getElementById("three").style.fontWeight = "900";
    } else if (e.target.id === "fourthrow") {
      document.getElementById("four").style.fontWeight = "900";
    }
  };
  const Italic = (e) => {
    //function for getting text itlaic
    console.log("italic");
    if (e.target.id === "firstrow") {
      // passign ids for onclick in if & else
      document.getElementById("one").style.fontStyle = "italic";
    } else if (e.target.id === "secondrow") {
      document.getElementById("two").style.fontStyle = "italic";
    } else if (e.target.id === "thirdrow") {
      document.getElementById("three").style.fontStyle = "italic";
    } else if (e.target.id === "fourthrow") {
      document.getElementById("four").style.fontStyle = "italic";
    }
  };
  const underline = (e) => {
    //function for getting text underline
    console.log("underline");
    if (e.target.id === "firstrow") {
      // passign ids for onclick in if & else
      document.getElementById("one").style.textDecoration = "underline";
    } else if (e.target.id === "secondrow") {
      document.getElementById("two").style.textDecoration = "underline";
    } else if (e.target.id === "thirdrow") {
      document.getElementById("three").style.textDecoration = "underline";
    } else if (e.target.id === "fourthrow") {
      document.getElementById("four").style.textDecoration = "underline";
    }
  };
  const fontsize = (inputValue, e) => {
    //function for changing fontsize
    console.log(inputValue);
    if (e.target.id === "firstrow") {
      // passign ids for onclick in if & else
      document.getElementById("one").style.fontSize = inputValue + "px";
    } else if (e.target.id === "secondrow") {
      document.getElementById("two").style.fontSize = inputValue + "px";
    } else if (e.target.id === "thirdrow") {
      document.getElementById("three").style.fontSize = inputValue + "px";
    } else if (e.target.id === "fourthrow") {
      document.getElementById("four").style.fontSize = inputValue + "px";
    }
  };
  const color = (color, e) => {
    //function for changing font color
    console.log("Bold");
    if (e.target.id === "firstrow") {
      // passign ids for onclick in if & else
      document.getElementById("one").style.color = color;
    } else if (e.target.id === "secondrow") {
      document.getElementById("two").style.color = color;
    } else if (e.target.id === "thirdrow") {
      document.getElementById("three").style.color = color;
    } else if (e.target.id === "fourthrow") {
      document.getElementById("four").style.color = color;
    }
  };

  return (
    <Body>
      <Cards>
        <Grid>
          <Options>
            <Buttons id="firstrow" onClick={bold}>
              Bold
            </Buttons>
            <Buttons id="firstrow" onClick={Italic}>
              Italic
            </Buttons>
            <Buttons id="firstrow" onClick={underline}>
              Underline
            </Buttons>
            <FInput
              id="firstrow"
              type="number"
              placeholder="Font size"
              onChange={(evt) => {
                fontsize(evt.target.value, evt);
              }}
            />
            <Input
              id="firstrow"
              type="text"
              autoComplete="on"
              autoCorrect="on"
              placeholder="Color"
              onChange={(evt) => color(evt.target.value, evt)}
            />
          </Options>
        </Grid>
        <Grid id="one">Hello,This is first box</Grid>
        <Grid>
          <Options>
            <Buttons id="secondrow" onClick={bold}>
              Bold
            </Buttons>
            <Buttons id="secondrow" onClick={Italic}>
              Italic
            </Buttons>
            <Buttons id="secondrow" onClick={underline}>
              Underline
            </Buttons>
            <FInput
              id="secondrow"
              type="number"
              placeholder="Font size"
              onChange={(evt) => fontsize(evt.target.value, evt)}
            />
            <Input
              id="secondrow"
              type="text"
              autoComplete="on"
              autoCorrect="on"
              placeholder="Color"
              onChange={(evt) => color(evt.target.value, evt)}
            />
          </Options>
        </Grid>
        <Grid id="two">Hello,This is second box</Grid>

        <Grid>
          <Options>
            <Buttons id="thirdrow" onClick={bold}>
              Bold
            </Buttons>
            <Buttons id="thirdrow" onClick={Italic}>
              Italic
            </Buttons>
            <Buttons id="thirdrow" onClick={underline}>
              Underline
            </Buttons>
            <FInput
              id="thirdrow"
              type="number"
              placeholder="Font size"
              onChange={(evt) => fontsize(evt.target.value, evt)}
            />
            <Input
              id="thirdrow"
              autoComplete="on"
              autoCorrect="on"
              type="text"
              placeholder="Color"
              onChange={(evt) => color(evt.target.value, evt)}
            />
          </Options>
        </Grid>
        <Grid id="three">Hello,This is third box</Grid>

        <Grid>
          <Options>
            <Buttons id="fourthrow" onClick={bold}>
              Bold
            </Buttons>
            <Buttons id="fourthrow" onClick={Italic}>
              Italic
            </Buttons>
            <Buttons id="fourthrow" onClick={underline}>
              Underline
            </Buttons>
            <FInput
              id="fourthrow"
              type="number"
              placeholder="Font size"
              onChange={(evt) => fontsize(evt.target.value, evt)}
            />
            <Input
              id="fourthrow"
              type="text"
              autoComplete="on"
              autoCorrect="on"
              placeholder="Color"
              onChange={(evt) => color(evt.target.value, evt)}
            />
          </Options>
        </Grid>
        <Grid id="four">Hello,This is fourth box</Grid>
      </Cards>
    </Body>
  );
}
export default App;

const Body = styled.div`
  background-color: grey;
  height: 100vh;
  margin: 0;
  padding: 1rem;
`;

const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Grid = styled.div`
  background-color: #f0f0f0;
  color: black;
  padding: 1rem;
  height: 4rem;
  border-radius: 10px;
`;

const Buttons = styled.button`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
const Options = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Input = styled.input`
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  width: 100px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const FInput = styled.input`
  font-size: 10px;
  padding: 5px;
  width: 60px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
