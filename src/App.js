import { useState } from 'react';

const App = () => {
  const [goodVotes, setGoodVotes] = useState(0);
  const [neutralVotes, setNeutralVotes] = useState(0);
  const [badVotes, setBadVotes] = useState(0);
  const [allVotes, setAllVotes] = useState(0);

  const handleGoodVotes = () => {
    setGoodVotes(goodVotes + 1);
    setAllVotes(allVotes + 1);
  };

  const handleNeutralVotes = () => {
    setNeutralVotes(neutralVotes + 1);
    setAllVotes(allVotes + 1);
  };

  const handleBadVotes = () => {
    setBadVotes(badVotes + 1);
    setAllVotes(allVotes + 1);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodVotes} buttonText={'Vote Good'}></Button>
      <Button onClick={handleNeutralVotes} buttonText={'Vote Neutral'}></Button>
      <Button onClick={handleBadVotes} buttonText={'Vote Bad'}></Button>

      <h1>Statistics</h1>
      {goodVotes || neutralVotes || badVotes ? (
        <table>
          <td>
            <p>Good Votes:</p>
            <p>Neutral Votes:</p>
            <p>Bad Votes:</p>
            <p>All Votes:</p>
            <p>Vote Percentage:</p>
            <p>Average Vote:</p>
          </td>
          <td>
            <Statistics statisticsValue={goodVotes}></Statistics>
            <Statistics statisticsValue={neutralVotes}></Statistics>
            <Statistics statisticsValue={badVotes}></Statistics>
            <Statistics statisticsValue={allVotes}></Statistics>
            <Statistics statisticsValue={`${((100 * goodVotes) / allVotes).toFixed(2)}%`}></Statistics>
            <Statistics statisticsValue={((goodVotes - badVotes) / allVotes).toFixed(2)}></Statistics>
          </td>
        </table>
      ) : (
        <Statistics statisticsText={`No feedback yet.`}></Statistics>
      )}
    </>
  );
};

const Button = ({ onClick, buttonText }) => <button onClick={onClick}>{buttonText}</button>;

const Statistics = ({ statisticsValue }) => <p>{statisticsValue}</p>;

export default App;
