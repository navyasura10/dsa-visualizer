import React from "react";
import "../cssfiles/About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About PlayWithDsa</h1>

            <p className="about-text">
                PlayWithDsa is an interactive Data Structures and Algorithms
                visualizer built using React. This project helps users understand
                how sorting algorithms and linear data structures work internally
                through animated step-by-step visualization.
            </p>

            <p className="about-text">
                The application currently supports:
                Bubble Sort, Selection Sort, Insertion Sort,
                Merge Sort, Quick Sort, Stack, and Queue.
                Each algorithm is animated to clearly show comparisons,
                swaps, dividing, merging, pivot selection, and sorted states.
            </p>

            <h2>Color Legend</h2>

            <div className="legend">
                <div><span className="color default"></span> Default Bar</div>
                <div><span className="color comparing"></span> Comparing</div>
                <div><span className="color swapping"></span> Swapping</div>
                <div><span className="color sorted"></span> Sorted</div>
                <div><span className="color dividing"></span> Dividing (Merge Sort)</div>
                <div><span className="color merging"></span> Merging (Merge Sort)</div>
                <div><span className="color pivot"></span> Pivot (Quick Sort)</div>
            </div>
        </div>
    );
}

export default About;