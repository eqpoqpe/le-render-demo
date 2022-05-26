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
function le_render(MRT) {
  console.log(MRT);
}

// supported diff-commands render
function render() {}

(function () {
  // setTimeout(() => {}, 3000);

  le_render(MAPPING_DIRR_RERENDER);
})()