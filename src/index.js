const proot = document.querySelector("#page-root");

const __SLICE__ = false;

// data to mapping tree
// disabled properties
const MAPPING_DIRR_RERENDER = {
  MAPPING_RENDER_TREE: [
    {
      _$: 0,
      tag: document.createElement("div"),
      content: [
        22,
        {
          _$: 0,
          tag: document.createElement("div"),
          content: [
            {
              _$: 0,
              tag: document.createElement("div"),
              content: [
                0
              ]
            }
          ]
        },
        {
          _$: 0,
          tag: document.createElement("div"),
          content: []
        }
      ]
    },
    {
      _$: 0,
      tag: document.createElement("div"),
      content: [22]
    }
  ]
};


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
    MRT.MAPPING_RENDER_TREE.map((le) => { console.log(le); });
  }
}

// supported diff-commands render
function render() {}

(function () {
  // setTimeout(() => {}, 3000);

  le_render(MAPPING_DIRR_RERENDER, document.querySelector("page-root"));
})()