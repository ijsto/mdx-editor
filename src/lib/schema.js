import { Block } from 'slate';

export default {
  blocks: {
    hr: {
      isVoid: true,
    },
    image: {
      isVoid: true,
    },
    'jsx-void': {
      isVoid: true,
    },
  },
  document: {
    last: { type: 'paragraph' },
    normalize: (change, { code, node }) => {
      switch (code) {
        case 'last_child_type_invalid': {
          const paragraph = Block.create('paragraph');
          return change.insertNodeByKey(node.key, node.nodes.size, paragraph);
        }
        default: {
          return null;
        }
      }
    },
  },
};
