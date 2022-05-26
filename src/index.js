import MAPPING_DIRR_RERENDER from "./MAPPING_TREE";

const proot = document.querySelector("#page-root");

const __SLICE__ = false;

/**
 * first page render 
 * 
 * @flow
 * 
 * @param {object} MRT 
 */
function le_render(MRT, proot) {
  // console.log(MRT);

  if (MRT.MAPPING_RENDER_TREE.length > 0) {
    MRT.MAPPING_RENDER_TREE.map((le) => {
      if (!le._$) {
      }
    });
  }
}

// supported diff-commands render
function render() {}

(function () {
  // setTimeout(() => {}, 3000);

  le_render(MAPPING_DIRR_RERENDER, document.querySelector("page-root"));
})()