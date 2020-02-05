import React from "react";
import {
  FaFile,
  FaFolder,
  FaFolderOpen,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";
import styled from "styled-components";
// import last from 'lodash/last';
import PropTypes from "prop-types";
import { ResourceType } from "./data";
import { mock_data } from "./data";

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === ResourceType.TASK) paddingLeft += 20;
  return paddingLeft;
};

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => (props.marginRight ? props.marginRight : 5)}px;
`;

function getNodeLabel(node) {
  return mock_data.asanaObjects[node.gid].name;
}

// TreeNode Component
function TreeNode(props) {
  console.log('TreeNode');
  console.log(props);
  const { node, getChildNodes, level, onToggle, onNodeSelect } = props;

  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.resource_type}>
        <NodeIcon onClick={() => onToggle(node)}>
          {node.resource_type !== ResourceType.TASK &&
            (node.isOpen ? <FaChevronDown /> : <FaChevronRight />)}
        </NodeIcon>

        <NodeIcon marginRight={10}>
          {node.resource_type === ResourceType.TASK && <FaFile />}
          {node.resource_type !== ResourceType.TASK && node.isOpen && (
            <FaFolderOpen />
          )}
          {node.resource_type !== ResourceType.TASK && !node.isOpen && (
            <FaFolder />
          )}
        </NodeIcon>

        <span role="button" onClick={() => onNodeSelect(node)}>
          {getNodeLabel(node)}
        </span>
      </StyledTreeNode>

      {node.isOpen &&
        getChildNodes(node).map(childNode => (
          <TreeNode
            {...props}
            key={childNode.gid}
            node={childNode}
            level={level + 1}
          />
        ))}
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired
};

TreeNode.defaultProps = {
  level: 0
};

export default TreeNode;
