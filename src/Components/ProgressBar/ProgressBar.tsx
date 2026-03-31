import { useEffect, useState } from "react";


const ProgressBar = () => {
    const bars = [0, 5, 15, 50, 75, 100]

    return <>
        {bars.map((value) => (<div className='outer'><InnerProgressBar key={value} progressState={value} /></div>))}

    </>
}

export default ProgressBar;

const InnerProgressBar = ({ progressState }: any) => {
    const [animatedProgressState, setAnimatedProgressState] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgressState(progressState), 100)
    }, [progressState])

    return <>
        <div className='inner' style={{
            textAlign: "center",
            width: `${animatedProgressState}%`
        }}
            role='progressBar'
            aria-valuenow={animatedProgressState}
            aria-valuemax={100}
            aria-valuemin={0}
        >{progressState}%</div>
    </>
}