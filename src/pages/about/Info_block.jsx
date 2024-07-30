import React, {useState} from 'react'
import ExpandedInfoBlock from './infoBlocks/ExpandedInfoBlock'

function Info_block() {

  const [expandedBlock, setExpandedBlock] = useState(null);

  const infoBlocks = [
    { title: 'About Us', content: 'Brief information about CareerNiTi...' },
    { title: 'Our Vision', content: 'Information about CareerNiTi\'s vision...' },
    { title: 'Our Mission', content: 'Information about CareerNiTi\'s mission...' },
  ];

  const handleBlockHover = (index) => {
    setExpandedBlock(index);
  };

  const handleBlockLeave = () => {
    setExpandedBlock(null);
  };

  return (
    <div>
      <h1>Info_blocks - work in progress</h1>

      {infoBlocks.map((block, index) => (
        <div
          key={index}
          onMouseEnter={() => handleBlockHover(index)}
          onMouseLeave={handleBlockLeave}
          style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}
        >
          <h2>{block.title}</h2>
          <div className={`expanded-info-block ${expandedBlock === index ? 'active' : ''}`}>
            <ExpandedInfoBlock title={block.title} content={block.content} />
          </div>
        </div>
  
      ))}

    </div>
  );

}

export default Info_block