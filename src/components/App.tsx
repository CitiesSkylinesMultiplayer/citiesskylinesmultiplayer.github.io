import React from 'react';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import FAQPage from '../routes/FAQPage';
import SupportedModsPage from '../routes/SupportedModsPage';

import {
  ArrowDownloadFilled,
  BookQuestionMarkFilled,
  PuzzlePieceFilled,
  ClipboardCodeFilled,
} from '@fluentui/react-icons';

function App() {
  // Setup GA
  ReactGA.initialize('UA-37972059-10');

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/">Cities: Skylines Multiplayer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="mr-3" href="/faq">
                  <BookQuestionMarkFilled className="mr-2" fontSize={22} />
                  FAQ
                </Nav.Link>

                <Nav.Link className="mr-3" href="/supported-mods">
                  <PuzzlePieceFilled className="mr-2" fontSize={22} />
                  Supported Mods
                </Nav.Link>

                <NavDropdown
                  className="mr-3"
                  title={
                    <span>
                      <ArrowDownloadFilled className="mr-2" fontSize={22} />
                      Downloads
                    </span>
                  }
                  id="download-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"
                  >
                    Steam Workshop
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/releases"
                  >
                    Direct
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="mr-3"
                  title={
                    <span>
                      <ClipboardCodeFilled className="mr-2" fontSize={22} />
                      Development
                    </span>
                  }
                  id="development-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/"
                  >
                    GitHub Repository
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Developer-Resources"
                  >
                    Developer Resources
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  className="mr-3"
                  target="_blank"
                  href="https://www.patreon.com/CSM_MultiplayerMod"
                >
                  Patreon
                </Nav.Link>
                <Nav.Link target="_blank" href="https://discord.gg/RjACPhd">
                  Discord
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/supported-mods" element={<SupportedModsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        <footer className="Footer pt-3 pb-1 mt-5">
          <Container>
            <p>
              <small>
                This website and mod are in no way affiliated with Cities:
                Skylines or Paradox Interactive / Colossal Order
              </small>
            </p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
