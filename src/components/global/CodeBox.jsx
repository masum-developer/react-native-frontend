import { Box } from '@mui/material';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
    theme: 'light',
    settings: {
        background: '#2E3440',
        foreground: '#75baff',
        caret: '#5d00ff',
        selection: '#036dd626',
        selectionMatch: '#036dd626',
        lineHighlight: '#8a91991a',
        gutterBackground: '#F2F2F2',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#6272A4' },
        { tag: t.variableName, color: '#FF79AA' },
        { tag: [t.string, t.special(t.brace)], color: '#EDECEE' },
        { tag: t.number, color: '#C86347' },
        { tag: t.bool, color: '#5c6166' },
        { tag: t.null, color: '#5c6166' },
        { tag: t.keyword, color: '#EDECEE' },
        { tag: t.operator, color: '#5BB5F8' },
        { tag: t.className, color: '#5BB5F8' },
        { tag: t.definition(t.typeName), color: '#5c6166' },
        { tag: t.typeName, color: '#5c6166' },
        { tag: t.angleBracket, color: '#FF79AA' },
        { tag: t.tagName, color: '#FF79AA' },
        { tag: t.attributeName, color: '#5c6166' },
    ],
});

const CodeBox = ({ codeSnippet }) => {
    return (
        <Box mt={1}>
            <CodeMirror
                style={{ padding: '5px 0' }}
                value={codeSnippet}
                // height="200px"
                extensions={[javascript({ jsx: true })]}
                //   onChange={onChange}
                theme={myTheme}
                className="code-box"
                readOnly={true}
            />

        </Box>
    );
};

export default CodeBox;