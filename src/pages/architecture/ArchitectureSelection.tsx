import React, { useState } from 'react';
import { Col, Image, Radio, Row, Space, Steps, Divider, Button, message } from 'antd';
import ReactMarkdown from 'react-markdown';

import option1Image from '../../images/Architecture_1.png';
import option2Image from '../../images/Architecture_2.png';
import option3Image from '../../images/Architecture_3.png';

// Import style
import styles from './ArchitectureSelection.less';

const ARCHITECTURE_SELECTION_LIST = [
  {
    name: 'Architecture 1',
    image: option1Image,
    value: '1',
    content: (
      <>
        <p>
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi, fugiat
          culpa iste eius provident, omnis qui dicta, obcaecati odio ipsam id error. Ipsa reiciendis
          fuga, nemo atque excepturi beatae. asdadasda '
        </p>
        <p>
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi, fugiat
          culpa iste eius provident, omnis qui dicta, obcaecati odio ipsam id error. Ipsa reiciendis
          fuga, nemo atque excepturi beatae. asdadasda '
        </p>
      </>
    ),
  },
  {
    name: 'Architecture 2',
    image: option2Image,
    value: '2',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi, fugiat culpa iste eius provident, omnis qui dicta, obcaecati odio ipsam id error. Ipsa reiciendis fuga, nemo atque excepturi beatae.',
  },
  {
    name: 'Architecture 3',
    image: option3Image,
    value: '3',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi, fugiat culpa iste eius provident, omnis qui dicta, obcaecati odio ipsam id error. Ipsa reiciendis fuga, nemo atque excepturi beatae.',
  },
];

const testMarkdownString = `A paragraph with *emphasis* and **strong importance**.

\`\`\`JavaScript
let a = 3;
function a = () => {
  
}
let a = 3;
function a = () => {
  
}
let a = 3;
function a = () => {
  
}
let a = 3;
function a = () => {
  
}
\`\`\`


> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

const RadioGroup = Radio.Group;
const { Step } = Steps;

interface FormState {
  archType: string;
  githubURL: string;
  replicaCount: string;
  dataSize: string;
}

export const Step3: React.FC<{
  formState: FormState;
  setFormState: (value: FormState) => void;
}> = ({ formState, setFormState }) => (
  <>
    <h2>let us know your data size</h2>
    data size?
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_1">
        <title>Layer 1</title>
        <rect onClick={() => {console.log('working!')}} fill="#fff" stroke="#000" x="53" y="85.8" width="123" height="102" id="svg_1" />
      </g>
    </svg>
  </>
);

export const Step2: React.FC<{
  formState: FormState;
  setFormState: (value: FormState) => void;
}> = ({ formState, setFormState }) => (
  <>
    <h2>Please follow the instructions below to get the url</h2>
    <div className={styles.contentContainer}>
      {/* TODO: Create a HOC for this - Joseph */}
      <ReactMarkdown
        components={{
          code: (item) => {
            return (
              <>
                <code className={item.className}>{item.children[0]}</code>
                <button
                  className={styles.copyButton}
                  onClick={() => {
                    navigator.clipboard.writeText(item.children[0] as string);
                    message.success('Copied to clipboard!');
                  }}
                >
                  Copy
                </button>
              </>
            );
          },
        }}
      >
        {testMarkdownString}
      </ReactMarkdown>
    </div>
  </>
);

export const Step1: React.FC<{
  formState: FormState;
  setFormState: (value: FormState) => void;
}> = ({ formState, setFormState }) => (
  <>
    <h2 className={styles.subtitle}>Please select the architecture from followings:</h2>
    <Row gutter={16}>
      <Col span={4}>
        <RadioGroup
          value={formState.archType}
          name="archType"
          onChange={(e) => {
            setFormState({
              ...formState,
              archType: `${e.target.value}`,
            });
          }}
        >
          <Space direction="vertical">
            {ARCHITECTURE_SELECTION_LIST.map((option) => (
              <Radio key={option.name} value={option.value}>
                {option.name}
              </Radio>
            ))}
          </Space>
        </RadioGroup>
      </Col>
      <Col span={20}>
        {/* content section */}
        <div className={styles.infoContainer}>
          <div className={styles.imageContent}>
            <Image src={ARCHITECTURE_SELECTION_LIST[parseInt(formState.archType, 10) - 1].image} />
          </div>

          <div className={styles.textContent}>
            {ARCHITECTURE_SELECTION_LIST[parseInt(formState.archType, 10) - 1].content}
          </div>
        </div>
      </Col>
    </Row>
  </>
);

const ArchitectureSelection = () => {
  const [current, setCurrent] = React.useState<number>(0);

  const [formState, setFormState] = useState<FormState>({
    archType: '1',
    githubURL: '',
    replicaCount: '',
    dataSize: '',
  });

  const steps = [
    {
      title: 'Architecture',
      content: <Step1 formState={formState} setFormState={setFormState} />,
      validator: () => {
        return formState.archType !== '';
      },
    },
    {
      title: 'Second',
      content: <Step2 formState={formState} setFormState={setFormState} />,
    },
    {
      title: 'Last',
      content: <Step3 formState={formState} setFormState={setFormState} />,
    },
  ];

  const handleNext = () => {
    if (steps[current].validator !== undefined && !steps[current].validator!()) {
      message.info('Please fill out required fields');
    } else {
      setCurrent(current + 1);
    }
  };

  const handleSubmit = () => {
    if (steps[current].validator !== undefined && !steps[current].validator!()) {
      message.info('Please fill out required fields');
    } else {
      console.log('good to go');
    }
  };

  return (
    <div>
      <h1>Follow the instructions to set up your instance.</h1>
      <Divider />
      <div className={styles.stepsContainer}>
        <Steps type="default" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>

      <Divider />

      {steps[current].content}

      <Divider />

      <div className={styles.buttonContainer}>
        {current > 0 && (
          <Button
            onClick={() => {
              setCurrent(current - 1);
            }}
          >
            Previous
          </Button>
        )}
        {current < 2 && <Button onClick={handleNext}>Next</Button>}
        {current >= 2 && <Button onClick={handleSubmit}>Submit</Button>}
      </div>
    </div>
  );
};

export default ArchitectureSelection;
