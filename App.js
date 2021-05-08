import React from 'react';

import RootNavigator from './src/router';

const App = () => {
  // const [Splash, setSplash] = useState(true);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     setSplash(false);
  //   }, 4000);
  // }, []);
  // if (Splash) {
  //   return <SplashScreen />;
  // }

  return <RootNavigator />;
};

export default App;
  