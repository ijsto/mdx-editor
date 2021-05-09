/** @jsx jsx */
import { useState } from 'react'
import { ThemeProvider, css } from 'theme-ui'
import { jsx, Global } from '@emotion/react'

import ColorFillIcon from '@material-ui/icons/FormatColorFill'
import CloseIcon from '@material-ui/icons/Close'

const IconButton = props => (
  <button
    {...props}
    css={{
      display: 'block',
      position: 'fixed',
      top: 0,
      right: 0,
      margin: 8,
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      padding: 4,
      '&:focus': {
        outline: '2px solid',
        color: 'primary'
      }
    }}
  />
)

const ThemeEditor = props => {
  const [edit, setEdit] = useState(false)
  if (!edit) {
    return (
      <IconButton
        title="Edit Theme"
        onClick={e => {
          setEdit(true)
        }}
      >
        <ColorFillIcon />
      </IconButton>
    )
  }
  return (
    <div>
      <div
        css={css({
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          width: 256,
          px: 16,
          pt: 48,
          color: 'black',
          bg: '#f6f6fc'
        })}
      >
       Fieldsets were once here, but now they're not.
      </div>
      <IconButton
        title="Close Theme Editor"
        onClick={e => {
          setEdit(false)
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  )
}

export default (opts = {}) => ({
  renderEditor: (props, editor, next) => {
    const children = next()
    const { theme, components } = props

    return (
      <ThemeProvider components={components} theme={theme}>
          {children}
          {null && <ThemeEditor />}
          <Global
            styles={css({
              '*': {
                boxSizing: 'border-box'
              },
              body: {
                m: 0,
                fontFamily: 'system-ui, sans-serif',
                lineHeight: 1.5,
                color: 'text',
                bg: 'background',
                transitionProperty: 'background-color',
                transitionTimingFunction: 'ease-out',
                transitionDuration: '.4s'
              }
            })}
          />
      </ThemeProvider>
    )
  }
})
