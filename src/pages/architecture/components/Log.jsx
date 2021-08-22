import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import { useEffect } from 'react';

const Log = ({}) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    const int1 = setInterval(() => {
      setCode(
        `${code + new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} | ${(
          Math.random() * 100
        ).toFixed(
          2,
        )}% usage | [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n`,
      );
    }, 1000);
    return () => {
      clearInterval(int1);
    };
  });
  return (
    <div>
      <CodeMirror
        value={code}
        height="300px"
        onChange={(instance) => {
          console.log(instance.getScrollInfo());
          const sc = instance.getScrollInfo();
          instance.scrollTo(sc.left, sc.height + sc.top);
        }}
        options={{
          theme: 'monokai',
          tabSize: 0,
          keyMap: 'sublime',
          mode: 'jsx',
          readOnly: true,
          scrollbarStyle: 'native',
          lineWrapping: true,
        }}
        // onBeforeChange={(editor, data, value) => {
        //   this.setState({ value });
        // }}
        // onChange={(editor, value) => {
        //   console.log('controlled', { value });
        // }}
      />
    </div>
  );
};

export default Log;
