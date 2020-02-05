import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Tree from "./Tree";
import { mock_data } from "./mock-data";
import { stringify } from "../utilities";

const StyledFileExplorer = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

// FileExplorer Component
function FileExplorer() {
  const [selectedNode, setSelectedNode] = useState(null);

  function onSelect(node) {
    return setSelectedNode(node);
  }

  // TODO: Research util.inspect()
  let nodeDetail;
  if (selectedNode) {
    nodeDetail = (
      <div>
        <h2>Node Info</h2>
        {stringify(selectedNode)}
        <h2>Node Details</h2>
        {stringify(mock_data.items[selectedNode.gid])}
      </div>
    );
  } else {
    nodeDetail = <div>empty</div>;
  }

  return (
    <StyledFileExplorer>
      <TreeWrapper>
        <Tree onSelect={onSelect} />
      </TreeWrapper>
      <div>{selectedNode && nodeDetail}</div>
    </StyledFileExplorer>
  );
}

export default FileExplorer;
