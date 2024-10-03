import React from "react";
import "./styles.css";

const AppWrapper: React.FC = ({ children }) => {
  const [isShowing, setIsShowing] = React.useState<boolean>(true);

  return (
    <div className="AppWrapper">
      <h1>Tennis Australia</h1>
      <h2>UI Engineer Code Exercise</h2>
      <div className="App">
        <h3>Your App</h3>
        <div className="App">{children}</div>

        <div className="instructions-header">
          <h3>Instructions</h3>
          <button onClick={() => setIsShowing(!isShowing)}>
            {isShowing ? "Hide" : "Show"}
          </button>
        </div>

        {isShowing && (
          <>
            <p>
              In the folder <code>/instructions</code> you will find a list of
              instructions for the challenge.
            </p>

            <p>
              Please place your challenge code in <code>./src/App.tsx</code>.
              You are welcome to create as many files as you like, but use that
              file as your Application root.
            </p>
            <ul>
              <li>
                You are free to read through the instructions as far ahead as
                you like
              </li>
              <li>
                You should only start working on step 1, as the steps build upon
                each other
              </li>
              <li>
                Your interviewers are here to help you in any way you need. Feel
                free to ask if you have any questions, need any clarity or could
                use a nudge in the right direction.
              </li>
              <li>
                You are free to structure the project results however you want,
                add files, change files, there are no rules.
              </li>
              <li>
                This is primarily a react coding challenge and the visualization
                can be as pretty or as ugly as you want in order to achieve the
                requirements, styles (or lack thereof) won't be counted as a
                negative
              </li>
              <li>
                This is a full fledged app environment. Feel free to add any
                packages that you want to help you achieve your goals
              </li>
              <li>
                Talk out loud your thought process. This will help us guide you
                as needed and make sure you get credit for ideas you might not
                have been able to fully flesh out.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default AppWrapper;
