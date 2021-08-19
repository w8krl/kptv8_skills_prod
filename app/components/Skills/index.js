import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
// import 'react-dropdown-tree-select/dist/styles.css'
import "./styles.css";
import "./tree-styles.css";
import "./material.blue-light_blue.min.css";
import data from "./data.json";
import { withStyles } from '@material-ui/core/styles';

const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
  console.log("path::", selectedNodes);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach(k => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const SkillsTreeSelector = () => {
  assignObjectPaths(data);

  return (
    <DropdownTreeSelect data={data} onChange={onChange} className="mdl-demo" />
  );
};

export default (SkillsTreeSelector);