import {useState, useEffect} from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

function App () {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const onHandleClick = (evt) => {
        switch (evt.target.name) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;
            case 'bad':
                setBad(prevState => prevState + 1)
                break;
            
            default:
                return;
        }
    }

    useEffect(() => {
        const total = good + neutral + bad;
        setTotal(total)
    }, [good, neutral, bad])

    useEffect(() => {
        const percentage = Math.floor((good / total) * 100);
        setPercentage(percentage)
    }, [good, total])

    return (
        <>
            <FeedbackOptions
                incrementGood={onHandleClick}
                incrementNeutral={onHandleClick}
                incrementBad={onHandleClick}
            />
            {total > 0
                ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={percentage}
                />
                : <Notification message='No feedback given'/>
            }
        </>
    )
    
}
export default App;