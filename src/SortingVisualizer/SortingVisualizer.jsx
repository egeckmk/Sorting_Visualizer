import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
import { Link } from 'react-router-dom'

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 230;

const PRIMARY_COLOR = '#2D3748';

const SECONDARY_COLOR = '#E53E3E';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      arrayLength: NUMBER_OF_ARRAY_BARS,
      speedAnimation: ANIMATION_SPEED_MS 
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arrayLength; i++) {
      array.push(randomIntFromInterval(5, 300));
    }
    this.setState({array});
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (100 - this.state.speedAnimation));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (100 - this.state.speedAnimation));
      }
    }
  }

  arrayLengthOnChange(e) {
    this.setState({arrayLength: e.target.value});
    this.resetArray();
  }

  speedAnimationOnChange(e) {
    this.setState({speedAnimation: e.target.value});
  }

  render() {
    const {array, arrayLength, speedAnimation} = this.state;

    return (
      <div className="array-container mx-auto text-center">
        <div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${768 / array.length}px`
            }}></div>
        ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="mr-4 px-4 py-1 bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700" onClick={() => this.resetArray()}>Generate New Array</button>
          <button className="mr-4 px-4 py-1 bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700" onClick={() => this.mergeSort()}>Merge Sort</button>
          <label htmlFor="array-length" className="mr-2">Array Length: </label>
          <input id="array-length" className="mr-4 px-4 py-1 bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700" type="range" min="10" max="240" value={arrayLength} onChange={(e) => this.arrayLengthOnChange(e)} />
          <label htmlFor="animation-speed" className="mr-2">Animation Speed: </label>
          <input id="animation-speed" className="px-4 py-1 bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700" type="range" min="10" max="100" value={speedAnimation} onChange={(e) => this.speedAnimationOnChange(e)} />
        </div>
        <div className="mt-4">
          <Link className="px-4 py-1 bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700"  to="/time-complexity">Go to time complexity</Link>
        </div>
        </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}