export const ResourceType = {
  USER: "user",
  WORKSPACE: "workspace",
  PROJECT: "project",
  TASK: "task"
};

// Mock data
export const mock_data = {
  isFetching: false,
  // didInvalidate: false,

  // Cache of all feteched objects, indexed by GID
  items: {
    "4708136377445": {
      gid: "4708136377445",
      resource_type: ResourceType.USER,
      name: "Tom",
      email: "tom.booster@gmail.com",
      photo: null,
      workspaces: [
        { gid: "01", name: "Personal", resource_type: "workspace" },
        { gid: "02", name: "Work", resource_type: "workspace" }
      ]
    },
    "01": {
      gid: "01",
      resource_type: ResourceType.WORKSPACE,
      name: "Personal"
    },
    "02": {
      gid: "02",
      resource_type: ResourceType.WORKSPACE,
      name: "Work"
    },
    "001": {
      gid: "001",
      resource_type: ResourceType.PROJECT,
      name: "Project1"
    },
    "002": {
      gid: "002",
      resource_type: ResourceType.PROJECT,
      name: "Project2"
    },
    "003": {
      gid: "003",
      resource_type: ResourceType.PROJECT,
      name: "Project3"
    },
    "0001": {
      gid: "0001",
      resource_type: ResourceType.TASK,
      name: "Task1"
    },
    "0002": {
      gid: "0002",
      resource_type: ResourceType.TASK,
      name: "Task2"
    }
  },

  // Tree View
  // TODO: Same task can be a member of multiple projects
  view: {
    "4708136377445": {
      gid: "4708136377445",
      isRoot: true,
      isOpen: true,
      children: ["01", "02"]
    },
    "01": {
      gid: "01",
      children: ["001"]
    },
    "02": {
      gid: "02",
      children: ["002", "003"]
    },
    "001": {
      gid: "001"
    },
    "002": {
      gid: "002",
      children: ["0001"]
    },
    "003": {
      gid: "003"
    },
    "0001": {
      gid: "0001"
    },
    "0002": {
      gid: "0002"
    }
  }
};
