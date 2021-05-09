import React from 'react';
import { Themed } from 'theme-ui';

export default (opts = {}) => ({
  renderNode: (props, editor, next) => {
    const { node, attributes, children } = props;

    switch (node.type) {
      case 'table':
        return (
          <Themed.table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              borderSpacing: 0,
            }}
          >
            <tbody {...attributes}>
              {children}
              <tr>
                <td>
                  <span
                    onClick={() => {
                      editor.insertRow();
                    }}
                  >
                    + Add row
                  </span>
                  <span
                    onClick={() => {
                      editor.insertColumn();
                    }}
                  >
                    + Add column
                  </span>
                  <span
                    onClick={() => {
                      editor.removeRow();
                    }}
                  >
                    - Remove row
                  </span>
                  <span
                    onClick={() => {
                      editor.removeColumn();
                    }}
                  >
                    - Remove column
                  </span>
                  <span
                    onClick={() => {
                      editor.removeTable();
                    }}
                  >
                    - Remove table
                  </span>
                </td>
              </tr>
            </tbody>
          </Themed.table>
        );
      case 'table_row':
        return <Themed.tr {...attributes}>{children}</Themed.tr>;
      case 'table_cell':
        return (
          <Themed.td style={{ border: 'thin solid silver' }} {...attributes}>
            {children}
          </Themed.td>
        );
      default:
        return next();
    }
  },
});
