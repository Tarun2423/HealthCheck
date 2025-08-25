import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
return (
  <div className="dashboard-container">{/* was 'container' – renamed to avoid Bootstrap clash */}
    <Navbar />

    {/* Ticker */}
    <div className="tickerContainer">
      <div className="tickerText">
        <img src="assets/alert.png" className="alerting" alt="alert" />
        Important News: Next Scan on 25th Aug 2025 at 5.00 A.M. (Paris) / 8.30 A.M (IST)
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="chartscontainer">
      {/* Top metrics grid */}
      <div className="chart-grid">
        <div className="download">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img src="assets/download.png" alt="download" />
          </OverlayTrigger>
        </div>

        <div className="box"><h2>APIs</h2><p>180</p></div>
        <div className="box"><h2>Databases</h2><p>20</p></div>
        <div className="box"><h2>UIs</h2><p>10</p></div>
        <div className="box"><h2>Jobs</h2><p>80</p></div>
        <div className="box"><h2>Queues</h2><p>30</p></div>
        <div className="box"><h2>Last Scan Timestamp</h2><p>18/08/2025</p></div>
        <div className="box success"><h2>Success</h2><p>300</p></div>
        <div className="box failure"><h2>Failure</h2><p>20</p></div>

        {/* Bar chart spans full row */}
        <div className="barchart card-span">
          <BarChart />
        </div>
      </div>

      {/* Lower two-column area: piechart (left) + attention (right) */}
      <div className="lower-grid">
        <div className="piechart card">
          <Chart data={data(12, 10, 3)} name="Today's Overall Summary" />
        </div>

        <div className="attention-needed card">
          <div className="card-header">
            <h3>Attention Needed</h3>
            <span className="badge-critical">Critical</span>
          </div>
          <ul className="issue-list">
            <li><strong>API</strong> · PaymentService – 3 consecutive failures</li>
            <li><strong>Job</strong> · AccountSync – missed SLA (15m late)</li>
            <li><strong>Queue</strong> · orders.v1 backlog > 5k</li>
            <li><strong>DB</strong> · prod-read-replica latency high</li>
            <li><strong>API</strong> · Auth /health timeout</li>
            <li><strong>Job</strong> · Nightly ETL duration spike</li>
          </ul>
        </div>

        {/* Full-width recent failures under both */}
        <div className="recent-failures card">
          <div className="card-header">
            <h3>Recent Failures</h3>
            <button className="view-all">View All</button>
          </div>
          <div className="failures-row">
            <span className="pill pill-api">API</span>
            <span>InventoryService /health</span>
            <span className="ts">08:12</span>
          </div>
          <div className="failures-row">
            <span className="pill pill-job">JOB</span>
            <span>Ledger ETL — Exit code 1</span>
            <span className="ts">07:58</span>
          </div>
          <div className="failures-row">
            <span className="pill pill-queue">QUEUE</span>
            <span>events.v2 consumers lagging</span>
            <span className="ts">07:41</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default App
