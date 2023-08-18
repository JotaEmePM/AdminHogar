import React, { useEffect, useState } from 'react'
import Icon from './common/Icon'

interface Theme {
  name: string
}

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark')
  const [iconTheme, setIconTheme] = useState('moon-stars-fill')

  const changeTheme = ({ name }: Theme) => {
    setTheme(name)

    localStorage.setItem('theme', name)

    if (name === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', name)
    }

    if (name === 'light') { setIconTheme('sun-fill') } else if (name === 'dark') { setIconTheme('moon-stars-fill') } else { setIconTheme('circle-half') }
  }

  useEffect(() => {
    const initialTheme: string | null = localStorage.getItem('theme')
    changeTheme({ name: initialTheme ?? 'dark' })
  }, [theme])

  return (
    <>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label={`Toggle theme (${theme})`}>
          <Icon name={iconTheme} size="1em" cn="bi my-1 theme-icon-active" />
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`}
              data-bs-theme-value="light"
              aria-pressed="false"
              onClick={() => changeTheme({ name: 'light' })}
            >
              <Icon name="sun-fill" size="1em" cn="bi me-2 opacity-50 theme-icon" />
              Light
              <Icon name="check2" size="1em" cn="bi ms-auto d-none" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`}
              data-bs-theme-value="dark" aria-pressed="false"
              onClick={() => changeTheme({ name: 'dark' })}
            >
              <Icon name="moon-stars-fill" size="1em" cn="bi me-2 opacity-50 theme-icon" />
              Dark
              <Icon name="check2" size="1em" cn="bi ms-auto d-none" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`}
              data-bs-theme-value="auto"
              aria-pressed="true"
              onClick={() => changeTheme({ name: 'auto' })}
            >
              <Icon name="circle-half" size="1em" cn="bi me-2 opacity-50 theme-icon" />
              Auto
              <Icon name="check2" size="1em" cn="bi ms-auto d-none" />
            </button>
          </li>
        </ul>
      </div>

      <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme={theme}>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Administración Hogar</a>

        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
              {/* <svg className="bi"><use xlink: href="#search" /></svg> */}
              <Icon name="search" cn="bi" size="1em" />
            </button>
          </li>
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <Icon name="list" cn="bi" size="1em" />
            </button>
          </li>
        </ul>

        <div id="navbarSearch" className="navbar-search w-100 collapse">
          <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      <Icon cn="bi" name="house-fill" size="1em" />
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="file-earmark" size="1em" />
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="cart" size="1em" />
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="people" size="1em" />
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="graph-up" size="1em" />
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="puzle" size="1em" />
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    <Icon cn="bi" name="plus-circle" size="1em" />
                  </a>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="file-earmark-text" size="1em" />
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="file-earmark-text" size="1em" />
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="file-earmark-text" size="1em" />
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="file-earmark-text" size="1em" />
                      Year-end sale
                    </a>
                  </li>
                </ul>

                <hr className="my-3" />

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="gear-wide-connected" size="1em" />
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Icon cn="bi" name="door-closed" size="1em" />
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                  <Icon cn="bi" name="calendar3" size="1em" />
                  This week
                </button>
              </div>
            </div>

            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

            <h2>Section title</h2>
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
