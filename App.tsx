import { Provider as PaperProvider } from 'react-native-paper';

import App from './src/app';

const Main = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
export default Main;
