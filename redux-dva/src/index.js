import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router';
import {createLogger} from 'redux-logger';
// 1. Initialize
const app = dva({
  initialState: {
    main: 0,
    users: [
      {name: 'week'}
    ]
  },
  onAction: createLogger(),
  history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/main').default);
app.model(require('./models/users').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
