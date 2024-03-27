import { useState } from 'react'
import './App.css'

function App() {
  const [tableStyle, setTableStyle] = useState(1)

  return (
    <>
      <select
        style={{ width: '100px', height: '30px' }}
        onChange={(e) => {
          setTableStyle(Number(e.target.value));
        }}
        value={tableStyle}
      >
        <option value="0">尺码建议表</option>
        <option value="1">均码</option>
        <option value="2">衣服</option>
        <option value="3">长裙</option>
      </select>
      <div className="box">
        <div className="top">
          <div className="title">
            <div className="eTitle">Size Spec.</div>
            <div className="cTitle">尺码{tableStyle === 0 ? '建议' : ''}表</div>
          </div>
        </div>
        <div className="body">
          {tableStyle === 3 && (
            <>
              <div className="bTitle bDisplay4">
                <div className=""></div>
                <div className="">腰围</div>
                <div className="">裙长</div>
                <div className="">臀围</div>
              </div>
              <div className="bTitle bDisplay4 bgc">
                <div className="">S</div>
                <div className="">腰围</div>
                <div className="">裙长</div>
                <div className="">臀围</div>
              </div>
              <div className="bTitle bDisplay4">
                <div className="">M</div>
                <div className="">腰围</div>
                <div className="">裙长</div>
                <div className="">臀围</div>
              </div>
              <div className="bTitle bDisplay4 bgc">
                <div className="">L</div>
                <div className="">腰围</div>
                <div className="">裙长</div>
                <div className="">臀围</div>
              </div>
            </>)
          }

          {tableStyle === 2 && (
            <>
              <div className="bTitle bDisplay4">
                <div className=""></div>
                <div className="">肩宽</div>
                <div className="">胸围</div>
                <div className="">衣长</div>
              </div>
              <div className="bTitle bDisplay4 bgc">
                <div className="">S</div>
                <div className="">50</div>
                <div className="">92</div>
                <div className="">60</div>
              </div>
              <div className="bTitle bDisplay4">
                <div className="">M</div>
                <div className="">50</div>
                <div className="">92</div>
                <div className="">60</div>
              </div>
              <div className="bTitle bDisplay4 bgc">
                <div className="">L</div>
                <div className="">50</div>
                <div className="">92</div>
                <div className="">60</div>
              </div>
            </>)
          }
          {tableStyle === 1 && (
            <>
              <div className="bTitle bDisplay6">
                <div className=""></div>
                <div className="">肩宽</div>
                <div className="">胸围</div>
                <div className="">衣长</div>
                <div className="">袖长</div>
                <div className="">建议体重</div>
              </div>
              <div className="bTitle bDisplay6 bgc">
                <div className="">均码</div>
                <div className="">-</div>
                <div className="">92</div>
                <div className="">69</div>
                <div className="">-</div>
                <div className="">不超过140kg</div>
              </div>
            </>
          )}

          {tableStyle === 0 && (
            <>
              <div className="bTitle bDisplay3">
                <div className="">身高</div>
                <div className="">体重</div>
                <div className="">推荐尺码</div>
              </div>
              <div className="bTitle bDisplay3 bgc">
                <div className="">150-160cm</div>
                <div className="">40-45kg</div>
                <div className="">S/M</div>
              </div>
              <div className="bTitle bDisplay3">
                <div className="">155-165cm</div>
                <div className="">不超过</div>
                <div className="">M</div>
              </div>
              <div className="bTitle bDisplay3 bgc">
                <div className="">165-175</div>
                <div className="">不超过</div>
                <div className="">L</div>
              </div>
            </>
          )}

        </div>

        <div className="tips">*衣服由于平面测量，可能会有1-3CM误差，数据仅供参考，请以实物为准</div>
      </div>
    </>
  )
}

export default App
