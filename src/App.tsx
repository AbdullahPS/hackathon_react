import React, {  useState } from "react";
import { DetailContext,defaulstate } from "./components/context/context";
import "./App.css";
import { GitHubList } from "./components/GithubList";
import { MasterDetail, Item, Detail, Payload } from "./components/MasterDetail";
import { transformValue } from "./Question3/jsQuestion";

const question3Logging = () => {
  const initialObject = {
    a: 123,
    b: "abc",
    c: [1, 2, 3],
  };
  const transformedObject = transformValue(initialObject);
  console.warn(
    "Note: Bad habit to console log to Browser Window, should be removed in production"
  );
  console.log(JSON.stringify(transformedObject));
};

const App = () => {
 

return(
  <>
    <h1>Welcome to the Frontend Hackathon</h1>
    <h2>Task 1 - React</h2>
    <p>
      Implement a Master Detail component which renders a list of items on the
      left and a detail view on the right. When the user clicks on a list item
      the render function of the detail view should be called with the
      corresponding payload. The component should provide the following api:
    </p>
    <pre>
      <code>
        {`
  <MasterDetail>
    <Item payload={{content: "Hello Peers"}}>Intro</Item>
    <Item payload={{content: "Welcome to Cool Company"}}>Welcome</Item>
    <Detail>
      {(payload) => payload.content}
    </Detail>
  </MasterDetail>
    `}
      </code>
    </pre>
    <MasterDetail>
      <Item payload={{content: "Hello Peers"}}>Intro</Item>
      <Item payload={{content: "Welcome to Cool Company"}}>Welcome</Item>
      <Detail>
      {(payload) => payload.content}
      </Detail>
    </MasterDetail>
    <h2>Task 2 - Graphql</h2>
    <p>
      Query a list of all public repos of "facebook" via the{" "}
      <a href="https://developer.github.com/v4/">github graphql api</a>. A{" "}
      <a href="https://www.apollographql.com/docs/react/">apollo client</a> is
      setup for you. To query Github, you will need to create a personal
      access token with scope `public_repo` (Access public repositories)
      (<a href="https://github.com/settings/tokens/new">link</a>) and store it
      in file `./.env`.
    </p>
    <p>
      Render the list with your `MasterDetail` component developed
      earlier. List the name of the repos on the left side and provide details
      like name and description when the user clicks on the item. Implement
      reasonable loading and error states for your components. If you could not
      complete Task 1 provide the same functionality without the MasterDetail
      component.
    </p>
<GitHubList></GitHubList>
    <h2>Task 3 - Javascript</h2>
    <p>
      Implement a function which takes a arbitrary nested JS Object and do the
      following transformations:
    </p>
    <ul>
      <li>
        add +1 to each Number within in Object (eg:{" "}
        <span
          style={{
            fontStyle: "italic",
            margin: "0 5px",
            display: "inline-block",
          }}
        >
          x: 9 =&gt; x: 10
        </span>
        )
      </li>
      <li>
        add 'AE' to each String within in Object (eg:{" "}
        <div
          style={{
            fontStyle: "italic",
            margin: "0 5px",
            display: "inline-block",
          }}
        >
          y: 'abc' =&gt; y: 'abc AE'
        </div>
        )
      </li>
      <li>The object should keep its structure!</li>
      <li>Log the result to the browser console</li>
    </ul>
    See a rough example structure below:
    <pre>
      <code>{`
  // initial object
  {
    a: 123,
    b: 'abc'
    c: [1, 2, 3]
  }

  // resulting object
  {
    a: 124,
    b: 'abc AE'
    c: [2, 3, 4]
  }
`}</code>
    </pre>
    {question3Logging()}
    The components you develop during the hackathon should be rendered inside
    this {`<App />`} component.
    <h2>Best of Luck ????</h2>
  </>
);
}
export default App;
