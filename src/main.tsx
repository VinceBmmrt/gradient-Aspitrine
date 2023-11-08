import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(<App />);
