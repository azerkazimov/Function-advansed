const favorites = ["id-2"];
const tree = {
  id: "id-1",
  name: "Products",
  nodes: [
    {
      id: "id-2",
      name: "Food",
      nodes: [],
    },
  ],
};

function markFavorites(tree, favorites) {
  const isFavirote = favorites.includes(tree.id);

  return {
    ...tree,
    isFavirote,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
}

const result = markFavorites(tree, favorites);
console.log(result);

// result; // {
//     id: 'id-1',
//     name: 'Products',
//     isFavorite: false,
//     nodes: [
//         {
//             id: 'id-2',
//             isFavorite: true,
//             name: 'Food',
//             nodes: []
//         },
//     ],
// };
