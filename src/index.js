import MAPPING_DIRR_RERENDER from "./MAPPING_TREE";

const __SLICE__ = false;

function mountLoop(parent_node, le_nodes) {
  le_nodes.map((node) => {

    if (typeof node === "object" && node.hasOwnProperty("_$")) {
      if (node.content.length > 0) {
        mountLoop(node.tag, node.content);
        parent_node.appendChild(node.tag);
      }
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
  });
}

// supported diff-commands render

/**
 * receives commands from mapping diff
 * called by dispatcher
 * 
 * @param {*} MRT 
 * @param {{diff: boolean}} options 
 */
function render(MRT, options) {
  if (typeof options !== "undefined" && options) {
  } else {
  }
}

(function () {
  le_render(MAPPING_DIRR_RERENDER, document.querySelector("#page-root"));
  
  setTimeout(() => {
    MAPPING_DIRR_RERENDER.MAPPING_RENDER_TREE[0].content[3].tag.childNodes[0].nodeValue = "DONE";
  }, 1000);
})()

const logo = document.querySelector("#logo");

setTimeout(() => {
  fetch("https://eqpo.ml/projects/tinreact/images/tinreact.png")
  .then(response => response.blob())
  .then(imageBlob => {
      logo.src = URL.createObjectURL(imageBlob);
  });
}, 2000);