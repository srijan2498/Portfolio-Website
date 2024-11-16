import React, { useEffect, useState } from 'react'

const SingleSkill = ({ item }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = item.skillPercent / duration;

        const animateProgress = () => {
            if (start < item.skillPercent) {
                start += step * 10;
                setProgress(Math.min(start, item.skillPercent));
                setTimeout(animateProgress, 10);
            }
        };

        animateProgress();
    }, [item.skillPercent]);

    return (
        // <div title={`${item.skillName}`} className="progress-bar" style={{ '--progress-value': progress }}>
        //     <div className="skill_underlay" style={{ backgroundImage: `url(${item.image})` }}></div>
        //     <div className="progress-text">{Math.round(progress)}%</div>
        // </div>
        <div className="single_skill_container_name">{item.skillName}</div>
    );
}

export default SingleSkill
