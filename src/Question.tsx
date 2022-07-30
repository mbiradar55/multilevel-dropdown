import sample from "./assets/sample.gif";

const Question = () => {
  return (
    <pre>
      <code style={{ fontSize: "20px" }}>
        Your task is to create a multilevel dropdown menu similar to the image
        below.
        <br />
        <br />
        Two APIs calls are required to fetch the dropdown menu information.
        <br />
        <br />
        First API is to retrieve a login token via getToken function
        <br /> (Already implemented.)
        <br />
        <br />
        Second API is to retrieve the dropdown menu data which requires
        <br />
        the token from the first API.
        <br />
        <br /> Your Task:
      </code>
      <ol>
        <li>
          Implement getData function by using the token retrieved from the first
          API call to fetch the data
          <br />
          (https://interview-questions-dbs.herokuapp.com/welcome (GET))
          <br />
          {"Sample Header: "}
          <p style={{ color: "red" }}>
            {"{ headers: { Authorization: 'Bearer <<token>>'} }"}
          </p>
        </li>
        <li>
          Implement the dropdown menu component and click handlers (e.g.
          handleMenu, handleBack)
        </li>
        <li>(Bonus) Add CSS styling for the dropdown</li>
        <li>(Bonus) Write a meaningful test case</li>
        <li>(Bonus) Store token in session/local storage</li>
      </ol>
      Reference GIF: &nbsp;
      <br />
      <img src={sample} alt="sample" />
    </pre>
  );
};

export default Question;
