import React, { useState, useEffect } from "react";
import Node from "./Node/node";
import "./PathfindingVisualizer.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const getInitialGrd = () => {};

const createNode = (col, row) => {};

const getNewGridWithWallToggled = () => {};

const PathfindingVisualizer = () => {
  const [grid, setgrid] = useState([]);
  const [mouseisPressed, setmouseisPressed] = useState(false);
  useEffect(() => {
    const grid = getInitialGrd();
    setgrid(grid);
  }, []);

  return <div></div>;
};

export default PathfindingVisualizer;
