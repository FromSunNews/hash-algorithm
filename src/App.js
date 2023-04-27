import "./App.css";
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
  LabelImportantRounded
} from "@material-ui/icons";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Item from "./component/Item";
import { useEffect, useState } from "react";
import Background from "./component/particles/Background";
import ReactTyped from 'react-typed';
import { useDispatch, useSelector } from 'react-redux'

import md5 from 'crypto-js/md5';
import ripemd160 from 'crypto-js/ripemd160';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';
import sha224 from 'crypto-js/sha224';
import sha3 from 'crypto-js/sha3';
import sha384 from 'crypto-js/sha384';
import sha512 from 'crypto-js/sha512';
import { EvpKDF, HmacMD5, HmacRIPEMD160, HmacSHA1, HmacSHA224, HmacSHA256, HmacSHA3, HmacSHA384, HmacSHA512, PBKDF2, RC4, Rabbit, RabbitLegacy, SHA512, TripleDES } from "crypto-js";

function App() {

  const navigateCurrent = useSelector(state => state.navigateCurrent)
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)
  const [open, setOpen] = useState(true);
  const [isCopyed, setIsCopyed] = useState(false);

  useEffect(() => {
    setValue('')
    setResult(null)
    setIsCopyed(false)
  }, [navigateCurrent])

  const handleGenerate = () => {
    if (navigateCurrent === 'SHA256') {
      let hash = sha256(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'MD5') {
      let hash = md5(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'SHA1') {
      let hash = sha1(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'SHA224') {
      let hash = sha224(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'SHA384') {
      let hash = sha384(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'SHA512') {
      let hash = sha512(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'SHA3') {
      let hash = sha3(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'RIPEMD160') {
      let hash = ripemd160(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-MD5') {
      let hash = HmacMD5(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA1') {
      let hash = HmacSHA1(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA224') {
      let hash = HmacSHA224(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA256') {
      let hash = HmacSHA256(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA384') {
      let hash = HmacSHA384(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA512') {
      let hash = HmacSHA512(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-SHA3') {
      let hash = HmacSHA3(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'HMAC-RIPEMD160') {
      let hash = HmacRIPEMD160(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'PBKDF2') {
      let hash = PBKDF2(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'TRIPLEDES') {
      let hash = TripleDES(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'RC4') {
      let hash = RC4(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'RABBIT') {
      let hash = Rabbit(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'RABBIT-LEGACY') {
      let hash = RabbitLegacy(value)
      setResult(hash.toString()) 
    } else if (navigateCurrent === 'EVPKDF') {
      let hash = EvpKDF(value)
      setResult(hash.toString()) 
    } 
  }
  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "5rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <div className="App">
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <Background />
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src="./logo.png"
              alt="profile_img"
            />

          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              {/* <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                SHA
              </motion.h3> */}
              <Item icon={<LabelImportantRounded />} name="MD5" />
              <Item icon={<LabelImportantRounded />} name="SHA1" />
              <Item icon={<LabelImportantRounded />} name="SHA224" />
              <Item icon={<LabelImportantRounded />} name="SHA256" />
              <Item icon={<LabelImportantRounded />} name="SHA384" />
              <Item icon={<LabelImportantRounded />} name="SHA512" />
              <Item icon={<LabelImportantRounded />} name="SHA3" />
              <Item icon={<LabelImportantRounded />} name="RIPEMD160" />
{/* 
              <Item icon={<LabelImportantRounded />} name="HMAC-MD5" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA1" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA224" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA256" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA384" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA512" />
              <Item icon={<LabelImportantRounded />} name="HMAC-SHA3" />
              <Item icon={<LabelImportantRounded />} name="HMAC-RIPEMD160" />

              <Item icon={<LabelImportantRounded />} name="PBKDF2" />
              <Item icon={<LabelImportantRounded />} name="TRIPLEDES" />
              <Item icon={<LabelImportantRounded />} name="RC4" />
              <Item icon={<LabelImportantRounded />} name="RABBIT" />
              <Item icon={<LabelImportantRounded />} name="RABBIT-LEGACY" /> */}
              <Item icon={<LabelImportantRounded />} name="EVPKDF" />


            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="body_container">
        <h1 className="title">{navigateCurrent}</h1>
        <div className='animated-typing'>
          <ReactTyped
            strings={[
              'Hash Algorithm Web',
              'I can hash any algorithm for you',
              'Developed by FromSunNews'
            ]}
            typeSpeed={50}
            backSpeed={100}
            loop
          />  
        </div>
        
        <div className="container-input">
          <p className="input">Input:</p>
          <textarea
            placeholder="Enter every thing you want to hash..."
            rows="20"
            name="comment[text]"
            id="comment_text"
            cols="40"
            class="ui-autocomplete-input"
            autocomplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></textarea>
        </div>
        <button class="button-generator" onClick={() => handleGenerate()}>Generator</button>
        
        {
          result &&
          <div className="container-input">
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between'
            }}>
              <p className="output">Output:</p>
              <div className="btn-copy" onClick={() => {
                navigator.clipboard.writeText(result)
                setIsCopyed(true)
              }}>
                <ContentCopyRoundedIcon />
              </div>
            </div>
            <textarea
              rows="3"
              name="comment[text]"
              id="comment_text"
              cols="40"
              class="ui-autocomplete-input"
              autocomplete="off"
              role="textbox"
              aria-autocomplete="list"
              aria-haspopup="true"
              value={result}
              disabled
            >
            </textarea>
          </div>
        }

        {
          isCopyed &&
          <p>Copyed in clipboard</p>
        }
      </div>
    </div>
  );
}

export default App;
