import React from 'react'
import '../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faCartPlus, faCartShopping, faHamsa, faHandHoldingDollar, faMagnifyingGlass, faWallet } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <div id='dashboard'>
      <div className='dashboard-container'>
        <div className="dashboard-header">
          <div className="greet">
            <h1>Hello Rakesh <FontAwesomeIcon icon={faHamsa} className='hand' /></h1>
          </div>
          <div className="search">
            <input type="search" name="" id="" className="search" placeholder='search' />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='glass' />
            </button>
          </div>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-top">
            <div className="expenditure">
              <div className="icon">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </div>
              <div className="money-balancing">
                <p>Earning</p>
                <p>$198k</p>
                <p><span className='up'><FontAwesomeIcon icon={faArrowUp} />37.8%</span>&nbsp;this month</p>
              </div>
            </div>
            <div className="expenditure">
              <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="money-balancing">
                <p>Order</p>
                <p>$2.4k</p>
                <p><span className='down'><FontAwesomeIcon icon={faArrowDown} className='down' />2%</span>&nbsp;this month</p>
              </div>
            </div>
            <div className="expenditure">
              <div className="icon">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <div className="money-balancing">
                <p>Balance</p>
                <p>$2.4k</p>
                <p><span className='down'><FontAwesomeIcon icon={faArrowDown} className='down' />2.8%</span>&nbsp;this month</p>
              </div>
            </div>
            <div className="expenditure">
              <div className="icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              <div className="money-balancing">
                <p>Total Sales</p>
                <p>$98k</p>
                <p><span className='up'><FontAwesomeIcon icon={faArrowUp} />11%</span>&nbsp;this month</p>
              </div>
            </div>
          </div>
          <div className="dashboard-center">
            <div className="dashboard-overview">
              <div className="dashboard-overview-top">
                <div className="dashboard-overview-top-left">
                  <h3>Overview</h3>
                  <p>Monthly Earning</p>
                </div>
                <div className="dashboard-overview-top-right">
                  <select name="" id="">
                    <option value="">--Select--</option>
                    <option value="">Monthly</option>
                    <option value="">Quarterly</option>
                    <option value="">Half Yearly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="dashboard-overview-center">
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Jan</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Feb</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Mar</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Apr</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>May</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Jun</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Jul</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Aug</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Sep</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Oct</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Nov</p>
                </div>
                <div className="graph">
                  <div className="bar-graph"></div>
                  <p>Dec</p>
                </div>
              </div>
            </div>
            <div className="dashboard-customers">
              <div className="dashboard-customers-top">
                <h3>Customers</h3>
                <p>Monthly Earning</p>
              </div>
              <div className="dashboard-customers-center">
                <div className="dashboard-customer-graph">
                  <div className="dashboard-customer-graph-circle">
                    <div className="dashboard-customer-graph-circle-outer">
                      <div className="dashboard-customer-graph-circle-inner">
                        <h3>65%</h3>
                        <p>Total Now Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-bottom">
            <div className="dashboard-bottom-top">
              <div className="dashboard-bottom-top-left">
                <h3>Product Sell</h3>
              </div>
              <div className="dashboard-bottom-top-right">
                <div className="dashboard-bottom-top-right-input">
                  <input type="search" name="" id="" />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="dashboard-bottom-top-right-select">
                  <select name="" id="">
                    <option value="">--Select--</option>
                    <option value="">Monthly</option>
                    <option value="">Quarterly</option>
                    <option value="">Half Yearly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <td>Product Name</td>
                <td>Stock</td>
                <td>Price</td>
                <td>Total Sales</td>
              </thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="dashboard-footer"></div>
      </div>
    </div>
  )
}

export default Dashboard