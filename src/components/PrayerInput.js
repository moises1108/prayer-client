import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PrayerInput = () => {
  const [form, setForm] = useState({
    name: "",
    city: undefined,
    country: undefined,
    content: "",
  });
  //BUTTON: SubmitHandler
  const submitHandler = (e) => {
    console.log("button clicked");
    console.log(form);
    axios
      .post("http://localhost:5000/prayer", form)
      .then((response) => {
        console.log("posted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //OnChange Handler
  const inputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  //States

  return (
    <FlexContainer>
      <Title>Send us your prayer requests!</Title>
      <Description>
        Prayers will be automatically deleted every week
      </Description>
      <Form>
        <NameInput
          name="name"
          onChange={inputChange}
          placeholder="Type your name (Required)"
          value={form.name || ""}
        ></NameInput>
        <CityInput
          name="city"
          onChange={inputChange}
          placeholder="Type your city"
          value={form.city || ""}
        ></CityInput>
        <CountryInput
          name="country"
          onChange={inputChange}
          placeholder="Type your country"
          value={form.country || ""}
        ></CountryInput>
        <ContentInput
          name="content"
          onChange={inputChange}
          value={form.content || ""}
          placeholder="What do you want our community to pray for you? (Required)"
        ></ContentInput>
        <SubmitButton
          //  type="button"
          onClick={submitHandler}
        >
          Pray for me
        </SubmitButton>
      </Form>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  /* background-color: cornflowerblue; */
`;

const Title = styled.h1`
  color: black;
  font-size: 2em;
  text-align: center;
  font-family: Inter;
  font-weight: bold;
`;
const Description = styled.h2`
  color: black;
  font-size: 1.3em;
  text-align: center;
  font-family: Inter;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: auto;
  align-items: center;
  /* background-color: green; */
`;

const FormInput = styled.input`
  width: 100%;
  min-width: 279px;
  padding: 5px 12px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

//Extending Input
const ContentInput = styled.textarea`
  /* background-color: yellow; */
  height: 10em;
  width: 100%;
  padding: 5px 12px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  min-width: 279px;
`;
const CityInput = styled(FormInput)``;
const CountryInput = styled(FormInput)``;
const NameInput = styled(FormInput)``;

const SubmitButton = styled.button`
  background-color: green;
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: lightgreen;
  }
`;

export default PrayerInput;
