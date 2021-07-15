import React from 'react';

import {
    selectedInterval,
    disabledIntervals,
    timelineInterval
} from "./datesSource";

import { format } from "date-fns";
import TimeRange from "react-timeline-range-slider";

import "./range-slider.css";

export default function RangeSlider(props) {
    const [selectedIntervals, setSelectedInterval] = React.useState(selectedInterval);
    const [error, setError] = React.useState(false);

    const onChangeCallback = (selectedIntervals) => {
        setSelectedInterval(selectedIntervals);
    };

    const errorHandler = (error) => {
        setSelectedInterval(selectedIntervals);
    };

    return (
        <div className="container">
            <div className="info">
                <span>Selected Interval: </span>
                {selectedIntervals.map((d, i) => (
                    <span key={i}>{format(d, "dd MMM, HH:mm")}</span>
                ))}
            </div>

            <TimeRange
                error={error}
                ticksNumber={36}
                selectedIntervals={selectedIntervals}
                timelineInterval={timelineInterval}
                onUpdateCallback={errorHandler}
                onChangeCallback={onChangeCallback}
                disabledIntervals={disabledIntervals}
            />
        </div>
    );
}
