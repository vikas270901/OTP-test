// import Spacer from 'components/Spacer/Spacer';
import { useEffect, useRef, useState } from 'react';
import back from './Asset/Body/bi_arrow-left-circle.svg';
import verify from './Asset/Body/Vector.svg';
import './Body.css';
let curId = 0;
function Body() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otpId, setOtpId] = useState(0);
  const ref = useRef(null);
  const handleBack = (event, id) => {
    curId = id;
    if (event.key === "Backspace") setOtpId(curId - 1);
  }
  const handleChange = (event) => {
    let val = event.target.value;
    let newOtp = [...otp];
    newOtp[curId] = val.substring(val.length - 1);
    if (!val) setOtpId(curId + 1);
    else setOtpId(curId + 1);
    setOtp(newOtp);
  }
  useEffect(() => {
    ref.current && ref.current.focus();
    if (ref.current && ref.current.style) {
      ref.current.style.color = '#007FFF';
      ref.current.style.border = '2px solid #007FFF';
      // ref.current.style.color = '#007FFF';
    }
  }, [otpId])
  return (
    <>
      <div className="row">
        <div className="back">
          <img src={back} alt={'back'} height={40} width={40} />
        </div>
        <div className="verify-img">
          <img src={verify} alt={'Verified'} height={109} width={93} />
          <p className='text-ver'>Verification</p>
          <p className='text-otp'>OTP has been sent to your</p>
          <p className='text-otp'><span>+91 9087654321</span> and <span>xyz234@gmail.com</span></p>
        </div>
      </div>
      <div className="row">
        <div className="verify-otp">
          <div className="row-wrap">
            {otp.map((d, index) => {
              return (
                <div key={index} className="otps">
                  <input ref={index === otpId ? ref : null} type={'number'}
                    value={otp[index]}
                    onChange={handleChange}
                    onKeyDown={(e) => handleBack(e, index)}
                    height={60} width={60} />
                  {/* {index===otp.length-1?null:'some css'} */}
                </div>
              )
            })}
          </div>
          <p className='text-snd'><span>00:30</span></p>
          <button className='verify-btn'>Verify</button>
          <p className='text-tim'>Didn’t recieve? <span> Send again</span></p>
        </div>
      </div>
    </>
  );
}

export default Body;
