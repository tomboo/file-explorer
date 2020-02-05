import React from "react";
import { useState } from "react";
import values from "lodash/values";
import PropTypes from "prop-types";

import TreeNode from "./TreeNode";
import { mock_data } from "./mock-data";

// Tree Component
function Tree(props) {
  console.log('Tree');
  console.log(props);
  const [nodes, setNodes] = useState(mock_data.view);

  function getRootNodes() {
    return values(nodes).filter(node => node.isRoot === true);
  };

  function getChildNodes(node) {
    if (!node.children) return [];
    return node.children.map(gid => nodes[gid]);
  };

  function onToggle(node) {
    let newNode = {...node};
    newNode.isOpen = !newNode.isOpen;
    
    setNodes({
      ...nodes,
      [node.gid]: newNode
    });
  };

  function onNodeSelect (node) {
    const { onSelect } = props;
    onSelect(node);
  };

  const rootNodes = getRootNodes();

  return (
    <div>
      {rootNodes.map(node => (
        <TreeNode
          key={node.gid}
          node={node}
          getChildNodes={getChildNodes}
          onToggle={onToggle}
          onNodeSelect={onNodeSelect}
        />
      ))}
    </div>
  );
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default Tree;
