import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const openFileWithElectron = async () => {
    const { openFile } = window.electronAPI;
    const filePath = await openFile();
    console.log(filePath);
  };
  const saveFileWithElectron = async () => {
    const { saveFile } = window.electronAPI;
    const filePath = await saveFile();
    console.log(filePath);
  };
  const OpenVSCodeWithElectron = async () => {
    const { openVSCode } = window.electronAPI;
    const filePath = await openVSCode();
    console.log(filePath);
  };
  const algokitCliWithElectron = async () => {
    const { algokitCli } = window.electronAPI;
    await algokitCli();
  };
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <button type="button" id="btn" onClick={openFileWithElectron}>
          Open a File
        </button>
        <button type="button" id="btn_save" onClick={saveFileWithElectron}>
          Save a File
        </button>
        <button type="button" id="btn_vscode" onClick={OpenVSCodeWithElectron}>
          Open vscode
        </button>
        <button type="button" id="btn_cli" onClick={algokitCliWithElectron}>
          algokit cli
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
