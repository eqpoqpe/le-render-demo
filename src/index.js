import MAPPING_DIRR_RERENDER from "./MAPPING_TREE";

const __SLICE__ = false;

function mountLoop(parent_node, le_nodes) {
  le_nodes.map((node) => {

    if (typeof node === "object" && node.hasOwnProperty("_$")) {
      if (node.content.length > 0) {
        mountLoop(node.tag, node.content);
      }

      parent_node.appendChild(node.tag);
    } else {
      parent_node.appendChild(document.createTextNode(node));
    }
  });

  return parent_node;
}

function le_render(MRT, proot) {
  const children = [];

  if (MRT.MAPPING_RENDER_TREE.length > 0) {
    MRT.MAPPING_RENDER_TREE.map((le) => {
      if (!le._$) {
        children.push(mountLoop(le.tag, le.content));
      }
    });
  }

  proot.innerText = "";
  children.map((child) => {
    proot.appendChild(child);
  })
}

// supported diff-commands render
function render() {}

(function () {
  // setTimeout(() => {}, 3000);

  le_render(MAPPING_DIRR_RERENDER, document.querySelector("#page-root"));
})()