import './app.css';
import Button from './components/Button-Component';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Buttons</h1>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button />'`}</span>
            <Button />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button hover="hover" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button variant='outline'/>'`}</span>
            <Button variant="outline" />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant="outline" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button variant='text' />'`}</span>
            <Button variant="text" />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant="text" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button disableShadow />'`}</span>
            <Button variant="contained" disableShadow />
          </div>
        </div>
        <div className="row wide-md">
          <div className="button-container">
            <span className="regular-text">{`<Button disabled />`}</span>
            <Button disabled />
          </div>
          <div className="button-container">
            <span className="regular-text">
              {`<Button variant='text'disabled />`}
            </span>
            <Button variant="text" disabled />
          </div>
        </div>
        <div className="row wide-md-plus">
          <div className="button-container">
            <span className="regular-text">{`<Button startIcon='local_grocery_store' />'`}</span>
            <Button variant="contained" startIcon="local_grocery_store" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button endIcon='local_grocery_store' />'`}</span>
            <Button variant="contained" endIcon="local_grocery_store" />
          </div>
        </div>
        <div className="row wide-md-plus">
          <div className="button-container">
            <span className="regular-text">{`<Button size='sm' />'`}</span>
            <Button variant="contained" size="sm" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button size='md' />'`}</span>
            <Button variant="contained" size="md" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button size='lg' />'`}</span>
            <Button variant="contained" size="lg" />
          </div>
        </div>
        <div className="row wide-lg">
          <div className="button-container">
            <span className="regular-text">{`<Button size='default' />'`}</span>
            <Button variant="contained" color="default" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button color='primary' />'`}</span>
            <Button variant="contained" color="primary" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button color='secondary' />'`}</span>
            <Button variant="contained" color="secondary" />
          </div>
          <div className="button-container">
            <span className="regular-text">{`<Button color='danger' />'`}</span>
            <Button variant="contained" color="danger" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
